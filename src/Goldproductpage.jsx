// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/gold")
      .then((res) => {
        const data = res.data;
        if (category === "lehengas") {
          setItems(data.lehengas || []);
        } else if (category === "kurtas") {
          setItems(data.kurtas || []);
        } else if (category === "Sarees") {
          setItems(data.Sarees || []);
        } else if (category === "Jewellery") {
          setItems(data.Jewellery || []);
        }
      })
      .catch((err) => console.error(err));
  }, [category]);


  return (
    <div className="main">
      <h2>{category.toUpperCase()}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {items.map((e) => (
          <Link to={`/product/${e.id}`} key={e.id} style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-5px)";
                event.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "none";
                event.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={e.image}
                alt={e.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h4>{e.name}</h4>
              <p>₹{e.price}</p>
              <p>{e.delivery}</p>
              <p>⭐ {e.rating} ({e.reviews} reviews)</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
