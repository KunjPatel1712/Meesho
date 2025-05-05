import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3000/gold");
        const data = res.data;

        // Flatten all products into one array
        const allProducts = [
          ...(data.lehengas || []),
          ...(data.kurtas || []),
          ...(data.Sarees || []),
          ...(data.Jewellery || [])
        ];

        // Find product by matching the id
        const foundProduct = allProducts.find((item) => String(item.id) === id);

        setProduct(foundProduct);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  
     useEffect(() => {
      const EthicWear = async () => {
        try {
          const res = await fetch(`http://localhost:3000/ethnicwear/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      EthicWear();
    }, [id]); 

    useEffect(() => {
      const accessories = async () => {
        try {
          const res = await fetch(`http://localhost:3000/accessories/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      accessories();
    }, [id]); 

    useEffect(() => {
      const beauty = async () => {
        try {
          const res = await fetch(`http://localhost:3000/beauty/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      beauty();
    }, [id]); 

    useEffect(() => {
      const foot = async () => {
        try {
          const res = await fetch(`http://localhost:3000/footwear/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      foot();
    }, [id]); 

    useEffect(() => {
      const grocery = async () => {
        try {
          const res = await fetch(`http://localhost:3000/grocery/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      grocery();
    }, [id]); 

    useEffect(() => {
      const homemain = async () => {
        try {
          const res = await fetch(`http://localhost:3000/homemain/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      homemain();
    }, [id]); 

    useEffect(() => {
      const menswear = async () => {
        try {
          const res = await fetch(`http://localhost:3000/Menswear/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      menswear();
    }, [id]); 

    useEffect(() => {
      const westrendress = async () => {
        try {
          const res = await fetch(`http://localhost:3000/westrendress/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      westrendress();
    }, [id]); 

    
    useEffect(() => {
      const homedecore = async () => {
        try {
          const res = await fetch(`http://localhost:3000/homedecore/${id}`); // Replace with your correct URL
          const data = await res.json();
          setProduct(data); // Save the fetched data to state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      homedecore();
    }, [id]); 
    

  if (!product) {
    return <p>Loading...</p>;
  }

  // If the product is found, display its details
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
    </div>
  );
};

export default Description;
