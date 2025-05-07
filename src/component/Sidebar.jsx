import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed

const Sidebar = () => {
  // State for the selected categories
  const [searchparams, setsearchparams] = useSearchParams();
  const [cateData, setcateData] = useState(searchparams.getAll("category") || []);

  // Handle category checkbox change
  const handlechange = (e) => {
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

  // Function to fetch all products
  const fetchAllProducts = () => {
    axios.get("http://localhost:3000/homemain")
      .then(response => {
        console.log("All Products:", response.data);
      })
      .catch(error => {
        console.error("Error fetching all products:", error);
      });
  };

  // Effect to fetch all products when no category is selected
  useEffect(() => {
    if (cateData.length === 0) {
      fetchAllProducts();
    }
  }, [cateData]);

  return (
    <div style={{ border: "1px solid black", padding: "20px", borderRadius: "15px" }}>
      <h3>Filter Products Here..</h3>

      {/* Categories */}
      <h4>Categories</h4>
      <div>
        <input
          type="checkbox"
          value="Men's Wear"
          onChange={handlechange}
          checked={cateData.includes("Men's Wear")}
        /> Men's Wear
        <br />
        <input
          type="checkbox"
          value="Women's Wear"
          onChange={handlechange}
          checked={cateData.includes("Women's Wear")}
        /> Women's Wear
        <br />
        <input
          type="checkbox"
          value="Kids"
          onChange={handlechange}
          checked={cateData.includes("Kids")}
        /> Kids
        <br />
        <input
          type="checkbox"
          value="Electronics"
          onChange={handlechange}
          checked={cateData.includes("Electronics")}
        /> Electronics
        <br />
        <input
          type="checkbox"
          value="Beauty"
          onChange={handlechange}
          checked={cateData.includes("Beauty")}
        /> Beauty
        <br />
        <input
          type="checkbox"
          value="Mobile Accessories"
          onChange={handlechange}
          checked={cateData.includes("Mobile Accessories")}
        /> Mobile Accessories
        <br />
        <input
          type="checkbox"
          value="Footwear"
          onChange={handlechange}
          checked={cateData.includes("Footwear")}
        /> Footwear
      </div>

      {/* Rating */}
      <h4 style={{ marginTop: "20px" }}>Rating</h4>
      <div>
        <input type="radio" name="rating" value="4" onChange={handlechange} /> 4★ & above
        <br />
        <input type="radio" name="rating" value="3" onChange={handlechange} /> 3★ & above
        <br />
        <input type="radio" name="rating" value="2" onChange={handlechange} /> 2★ & above
        <br />
        <input type="radio" name="rating" value="1" onChange={handlechange} /> 1★ & above
      </div>

      {/* Price */}
      <h4 style={{ marginTop: "20px" }}>Price</h4>
      <div>
        <input type="radio" name="price" value="0-499" onChange={handlechange} /> Under ₹500
        <br />
        <input type="radio" name="price" value="500-999" onChange={handlechange} /> ₹500 - ₹999
        <br />
        <input type="radio" name="price" value="1000-1999" onChange={handlechange} /> ₹1000 - ₹1999
        <br />
        <input type="radio" name="price" value="2000+" onChange={handlechange} /> ₹2000 & above
      </div>
    </div>
  );
};

export default Sidebar;
