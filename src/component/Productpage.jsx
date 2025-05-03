import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductsPage = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]); // Initialize products as an empty array

  // Fetch products from the local JSON server using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3000/main');
      setProducts(response.data.main || []); // Set products directly
    };

    fetchProducts();
  }, []); // Fetch only once on mount

  // Filter products when category changes or products are fetched
  const filteredProducts = products.filter((product) => {
    return product.category.toLowerCase() === category.toLowerCase(); // Match category
  });

  return (
    <div>
      <h1>
        Products in {category.replace('-', ' ')}
      </h1>
      <div className="product-list">
        {/* If there are no products in the category */}
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100px', height: '100px' }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
