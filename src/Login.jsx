import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Navigate } from "react-router-dom";

const API_URL = "https://meesho-server-hrpv.onrender.com/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [nextId, setNextId] = useState(1);


  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const response = await fetch(API_URL);
        const users = await response.json();
        const ids = users.map(u => u.id).sort((a, b) => a - b);

        let newId = 1;
        for (let id of ids) {
          if (id === newId) newId++;
          else break;
        }
        setNextId(newId);
      } catch (error) {
        console.error("Error:", error);
        setNextId(1);
      }
    };
    fetchNextId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    try {
      const checkResponse = await fetch(`${API_URL}?email=${email.toLowerCase()}`);
      const existingUsers = await checkResponse.json();

      if (existingUsers.length > 0) {
        const user = existingUsers[0];
        if (user.password === password) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("isLoggedIn", "true");
          setMessage("✅ Login successful!");
          window.location.href = "/cart";
        } else {
          setMessage("❌ Incorrect password.");
        }
        return;
      }

      const newUser = { id: nextId, email: email.toLowerCase(), password };
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        localStorage.setItem("isLoggedIn", "true");
        setNextId(nextId + 1); 
        setMessage("🎉 Registration successful!");
 
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Failed to register.");
      }
    } catch (error) {
      setMessage("Registration/Login failed: " + error.message);
    }
  };
//  const handlesubmitclick=()=>{
//  Navigate('/login');  
//  }
  return (
    <Container fluid style={{ backgroundColor: "#fff0f5", minHeight: "100vh", padding: "20px" }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Col xs={12} sm={10} md={8} lg={6}
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "0",
            overflow: "hidden",
          }}
        >
          <Row className="g-0">
            <Col md={6} className="d-none d-md-flex"
              style={{
                background: "linear-gradient(135deg, #d946ef, #9333ea)",
                color: "#fff",
                padding: "30px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h4 style={{ fontWeight: "700", marginBottom: "5px" }}>Great Quality</h4>
              <p style={{ fontSize: "16px", marginBottom: "20px" }}>Lowest prices</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "80px", height: "100px", backgroundColor: "#fff", borderRadius: "8px", opacity: 0.7 }} />
                <div style={{ width: "80px", height: "100px", backgroundColor: "#fff", borderRadius: "8px", opacity: 0.7 }} />
              </div>
            </Col>

            <Col xs={12} md={6} style={{ padding: "30px" }}>
              <h5 className="mb-4" style={{ fontWeight: 600 }}>
                Login or Sign Up to continue
              </h5>

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button 
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#9c27b0",
                    border: "none",
                    fontWeight: "600",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  Continue
                </Button>
              </Form>

              {message && (
                <Alert variant="info" className="mt-3 mb-3">
                  {message}
                </Alert>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
