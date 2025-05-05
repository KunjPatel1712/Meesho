import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch product data when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch all category data
        const ethnicRes = await axios.get("http://localhost:3000/ethnicwear");
        const accessoriesRes = await axios.get("http://localhost:3000/accessories");
        const beautyRes = await axios.get("http://localhost:3000/beauty");
        const footwearRes = await axios.get("http://localhost:3000/footwear");
        const groceryRes = await axios.get("http://localhost:3000/grocery");
        const homemainRes = await axios.get("http://localhost:3000/homemain");
        const menswearRes = await axios.get("http://localhost:3000/Menswear");
        const westrendressRes = await axios.get("http://localhost:3000/westrendress");
        const homedecoreRes = await axios.get("http://localhost:3000/homedecore");

        // Combine all products from different categories
        const allProducts = [
          ...ethnicRes.data,
          ...accessoriesRes.data,
          ...beautyRes.data,
          ...footwearRes.data,
          ...groceryRes.data,
          ...homemainRes.data,
          ...menswearRes.data,
          ...westrendressRes.data,
          ...homedecoreRes.data,
        ];

        // Find the product by matching the id
        const foundProduct = allProducts.find((item) => String(item.id) === id);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  // Add product to the cart
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, just increase the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the product is not in the cart, add it with quantity 1
      localStorage.setItem("cart", JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }

    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>{product.name}</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold", color: "#d10063" }}>
        ₹{product.price}
      </p>
      <p>{product.delivery}</p>
      <p>⭐ {product.rating} ({product.reviews} reviews)</p>
      
      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        style={{
          padding: "10px 20px",
          backgroundColor: "#d10063",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Add to Cart
      </button>

      {/* Go to Cart Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/cart")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default Description;
