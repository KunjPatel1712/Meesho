import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = ({ setFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setLocalFilter] = useState(searchParams.getAll("category"));
  
  // Handle the filter change when checkboxes are toggled
  const handleChange = (e) => {
    const { value } = e.target;
    let newArray = [...filter];
    
    if (filter.includes(value)) {
      newArray = filter.filter((el) => el !== value); // Remove from filter
    } else {
      newArray.push(value); // Add to filter
    }

    setLocalFilter(newArray); // Update local filter state
  };

  // Update the URL search params when filter changes
  useEffect(() => {
    setSearchParams({ category: filter });
    setFilter(filter); // Pass the filter to the parent component
  }, [filter, setSearchParams, setFilter]);

  return (
    <div>
      <label>
        Men's Clothing
        <input
          type="checkbox"
          value={"men's clothing"}
          onChange={handleChange}
          checked={filter.includes("men's clothing")}
        />
      </label>
      <br />
      <label>
        Women's Clothing
        <input
          type="checkbox"
          value={"women's clothing"}
          onChange={handleChange}
          checked={filter.includes("women's clothing")}
        />
      </label>
    
      <br />
      <label>
        Jewelry
        <input
          type="checkbox"
          value={"jewelery"}
          onChange={handleChange}
          checked={filter.includes("jewelery")}
        />
      </label>
      <br />
      <label>
        Saree
        <input
          type="checkbox"
          value={"saree"}
          onChange={handleChange}
          checked={filter.includes("saree")}
        />
      </label>
      <br />
      <label>
        Jeans
        <input
          type="checkbox"
          value={"jeans"}
          onChange={handleChange}
          checked={filter.includes("jeans")}
        />
      </label>
      <br />
      <label>
        Women's Fashion
        <input
          type="checkbox"
          value={"women's fashion"}
          onChange={handleChange}
          checked={filter.includes("women's fashion")}
        />
      </label>
      <br />
      <label>
        Kids
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleChange}
          checked={filter.includes("kids")}
        />
      </label>
      <br />
      <label>
        Footwear
        <input
          type="checkbox"
          value={"footwear"}
          onChange={handleChange}
          checked={filter.includes("footwear")}
        />
      </label>
      <br />
      <label>
        Bags
        <input
          type="checkbox"
          value={"bags"}
          onChange={handleChange}
          checked={filter.includes("bags")}
        />
      </label>
      <br />
    </div>
  );
};

export default Sidebar;
