import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";

const Sidebar = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const [cateData, setcateData] = useState(searchparams.getAll("category") || []);

  // Handle category checkbox change
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    let newarray = [...cateData];

    if (cateData.includes(value)) {
      newarray = cateData.filter((el) => el !== value);
    } else {
      newarray.push(value);
    }
    setcateData(newarray);
  };

  // Set search params when category data changes
  useEffect(() => {
    setsearchparams({ category: cateData });
  }, [cateData, setsearchparams]);

  return (
    <div
    className="sidebar-container"
    style={{
      backgroundColor: "#1a1a1a",
      color: "#fff",
      borderRadius: "15px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out",
      maxHeight: "100vh",
      overflowY: "auto",
    }}
  >
    <h3 className="text-center text-white">Filter Products Here..</h3>

    {/* Categories */}
    <h4 className="mt-4">Categories</h4>
    <Form>
      <Form.Check
        type="checkbox"
        value="Jewellery"
        onChange={handleCategoryChange}
        checked={cateData.includes("Jewellery")}
        label="Jewellery"
        className="text-white"
      />
      <Form.Check
        type="checkbox"
        value="Women's Fashion"
        onChange={handleCategoryChange}
        checked={cateData.includes("Women's Fashion")}
        label="Women's Fashion"
        className="text-white"
      />
      <Form.Check
        type="checkbox"
        value="Kids Fashion"
        onChange={handleCategoryChange}
        checked={cateData.includes("Kids Fashion")}
        label="Kids Fashion"
        className="text-white"
      />
    </Form>
  </div>
  );
};

export default Sidebar;
