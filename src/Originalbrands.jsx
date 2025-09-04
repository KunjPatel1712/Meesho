
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://meesho-server-hrpv.onrender.com/gold")
      .then((res) => {
        const data = res.data;
        if (category === "lehengas") {
          setItems(data.lehengas || []);
        } else if (category === "kurtas") {
          setItems(data.kurtas || []);
        }else if (category === "Sarees") {
            setItems(data.Sarees || [])
        }else if(category === "Jewellery"){
            setItems(data.Jewellery || [])
        }else if(category === "personalcare"){
            setItems(data.personalcare || [])
        }
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  }}
>
  {items.map((item) => (
    <div
      key={item.id}
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        backgroundColor: "#fff",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h4 style={{ fontSize: "16px", margin: "10px 0 5px" }}>{item.name}</h4>
      <p style={{ margin: "4px 0", color: "#333" }}>₹{item.price}</p>
      <p style={{ margin: "4px 0", color: "#333" }}>{item.delivery}</p>
      <p style={{ margin: "4px 0", color: "#333" }}>
        ⭐ {item.rating} ({item.reviews} reviews)
      </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default CategoryPage;
