// // src/pages/CartPage.jsx
// import React, { useEffect, useState } from "react";

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const handleRemove = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="empty-cart">Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <div className="cart-details">
//                 <h3>{item.name}</h3>
//                 <p>₹{item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button onClick={() => handleRemove(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="cart-total">
//         <h3>Total Price: ₹{totalPrice}</h3>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
