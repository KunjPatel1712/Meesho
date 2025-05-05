import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Function to properly parse price values
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      // Remove all non-numeric characters except decimal point
      const numericString = price.replace(/[^0-9.]/g, '');
      return parseFloat(numericString) || 0;
    }
    return 0;
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const increaseQty = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const decreaseQty = (id) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) } // Ensure quantity doesn't go below 1
          : item
      );
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (total, item) => total + (parsePrice(item.price) * item.quantity),
      0
    );
    return total.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };

  const getItemSubtotal = (item) => {
    const subtotal = parsePrice(item.price) * item.quantity;
    return subtotal.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };

  const getFormattedPrice = (price) => {
    return parsePrice(price).toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                display: "flex", 
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid #eee",
                borderRadius: "8px",
                backgroundColor: "#fff"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ 
                  width: "100px", 
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "20px", 
                  borderRadius: "8px" 
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 10px 0" }}>{item.name}</h3>
                <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
                  ₹{getFormattedPrice(item.price)}
                </p>
                
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <button 
                    onClick={() => decreaseQty(item.id)}
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #ccc",
                      backgroundColor: "#f5f5f5",
                      cursor: "pointer"
                    }}
                  >
                    -
                  </button>
                  <span style={{ padding: "0 10px" }}>{item.quantity}</span>
                  <button 
                    onClick={() => increaseQty(item.id)}
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #ccc",
                      backgroundColor: "#f5f5f5",
                      cursor: "pointer"
                    }}
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeItem(item.id)}
                    style={{
                      marginLeft: "15px",
                      padding: "5px 10px",
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </div>
                
                <p style={{ fontWeight: "bold" }}>
                  Subtotal: ₹{getItemSubtotal(item)}
                </p>
              </div>
            </div>
          ))}
          
          <div style={{ 
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <h2>Total: ₹{getTotalPrice()}</h2>
            <button 
              onClick={() => alert("Proceeding to checkout")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#d10063",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>Your cart is empty!</p>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#d10063",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;