import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCartItems);
  }, []);

  
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
     
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
          ? { ...item, quantity: Math.max(1, item.quantity - 1) } 
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

  const navigate = useNavigate();


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay SDK. Please check your connection.");
      return;
    }

    const totalAmount = cartItems.reduce(
      (total, item) => total + parsePrice(item.price) * item.quantity,
      0
    );

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: totalAmount * 100, 
      currency: "INR",
      name: "React E-Commerce",
      description: "Thank you for shopping!",
      image: "https://your-logo-url.com/logo.png", 
      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        localStorage.removeItem("cart");
        setCartItems([]);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some address",
      },
      theme: {
        color: "#d10063",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Container fluid style={{ background: "#f4f6f8", minHeight: "100vh", padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "600", fontFamily: "Poppins" }}>
        🛒 Your Cart
      </h2>

      {cartItems.length > 0 ? (
        <Row>
  
          <Col md={8}>
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="mb-4"
                style={{
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  border: "none",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "20px", 
                }}
              >
                <Row>
                  <Col md={4}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      style={{
                        height: "300px",
                        width: "auto",
                        borderRadius: "8px",
                        marginBottom: "15px", 
                      }}
                    />
                    <div style={{ display: "flex", gap: "5px", marginTop: "10px", flexWrap: "wrap" }}>
                      {item.additionalImages?.slice(0, 3).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`img-${idx}`}
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                          }}
                        />
                      ))}
                    </div>
                  </Col>
                  <Col md={8}>
                    <h5 style={{ fontWeight: "600", fontFamily: "Poppins" }}>{item.name}</h5>
                    <p style={{ color: "#666", fontSize: "14px" }}>Sold by: <strong>Top Seller</strong></p>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{
                        backgroundColor: "#388e3c",
                        color: "#fff",
                        padding: "3px 6px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}>
                        4.3 <AiFillStar style={{ marginLeft: "3px" }} />
                      </span>
                      <span style={{ marginLeft: "10px", fontSize: "13px", color: "#888" }}>(1,245 ratings)</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>₹{getFormattedPrice(item.price)}</span>
                      <span style={{ textDecoration: "line-through", color: "#999" }}>₹{getFormattedPrice(item.price * 1.3)}</span>
                      <span style={{ color: "#388e3c", fontWeight: "500" }}>23% OFF</span>
                    </div>

                    <p style={{ fontSize: "13px", color: "#444", margin: "8px 0" }}>
                      🚚 Delivery by <strong>May 12</strong>
                    </p>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "10px",
                      flexWrap: "wrap"
                    }}>
                      <Button size="sm" variant="outline-secondary" onClick={() => decreaseQty(item.id)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button size="sm" variant="outline-secondary" onClick={() => increaseQty(item.id)}>+</Button>
                      <Button size="sm" variant="outline-danger" onClick={() => removeItem(item.id)}><FaTrashAlt /></Button>
                      <Button size="sm" variant="outline-primary"><FaHeart style={{ marginRight: 5 }} /> Save</Button>
                    </div>

                    <p style={{ marginTop: "12px", fontWeight: "600" }}>Total: ₹{getItemSubtotal(item)}</p>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          
          <Col md={4}>
            <Card style={{
              position: "sticky",
              top: "20px",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}>
              <h5 style={{ fontWeight: "600", marginBottom: "20px" }}>🧾 Order Summary</h5>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Total Items:</span>
                <span>{cartItems.length}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Total Price:</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Delivery Charges:</span>
                <span style={{ color: "#388e3c" }}>FREE</span>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600" }}>
                <span>Grand Total:</span>
                <span>₹{getTotalPrice()}</span>
              </div>

              <Button
                variant="danger"
                size="lg"
                className="mt-4 w-100"
                onClick={handlePayment} 
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>🛍️ Your cart is empty!</p>
          <Button
            style={{ backgroundColor: "#d10063", border: "none", padding: "10px 25px" }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
