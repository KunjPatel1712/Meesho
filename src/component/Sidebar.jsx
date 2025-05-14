import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Form, Accordion } from "react-bootstrap";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [cateData, setCateData] = useState(searchParams.getAll("category") || []);
  const [priceData, setPriceData] = useState(searchParams.getAll("price") || []);
  const [ratingData, setRatingData] = useState(searchParams.getAll("rating") || []);

  const handleCheckboxChange = (value, data, setData) => {
    let updated = [...data];
    if (data.includes(value)) {
      updated = updated.filter((el) => el !== value);
    } else {
      updated.push(value);
    }
    setData(updated);
  };

  useEffect(() => {
    const params = {};
    if (cateData.length) params.category = cateData;
    if (priceData.length) params.price = priceData;
    if (ratingData.length) params.rating = ratingData;
    setSearchParams(params);
  }, [cateData, priceData, ratingData, setSearchParams]);

  return (
    <div
      className="sidebar-container"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        maxHeight: "100vh",
        overflowY: "auto",
        width: "100%",
      }}
    >
      <h4 className="text-center mb-4 text-white">🛍️ Filter Products</h4>

      <Accordion defaultActiveKey="0" flush alwaysOpen>
        {/* Category */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <Form>
              {["Jewellery", "Women's Fashion", "Kids Fashion"].map((cat) => (
                <Form.Check
                  key={cat}
                  type="checkbox"
                  value={cat}
                  label={cat}
                  className="text-white"
                  onChange={(e) => handleCheckboxChange(e.target.value, cateData, setCateData)}
                  checked={cateData.includes(cat)}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Price */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <Form>
              {[
                { label: "₹0 - ₹500", value: "0-500" },
                { label: "₹501 - ₹1000", value: "501-1000" },
                { label: "₹1001 - ₹2000", value: "1001-2000" },
              ].map(({ label, value }) => (
                <Form.Check
                  key={value}
                  type="checkbox"
                  value={value}
                  label={label}
                  className="text-white"
                  onChange={(e) => handleCheckboxChange(e.target.value, priceData, setPriceData)}
                  checked={priceData.includes(value)}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Rating */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Ratings</Accordion.Header>
          <Accordion.Body>
            <Form>
              {["4", "3", "2"].map((rating) => (
                <Form.Check
                  key={rating}
                  type="checkbox"
                  value={rating}
                  label={`${rating} Stars & up`}
                  className="text-white"
                  onChange={(e) => handleCheckboxChange(e.target.value, ratingData, setRatingData)}
                  checked={ratingData.includes(rating)}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sidebar;
