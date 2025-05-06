// import React, { useState } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import Form from 'react-bootstrap/Form';

// const Sidebar = ({ filters, setFilters, categories }) => {
//   const handleCheckbox = (e, type) => {
//     const { value, checked } = e.target;
//     setFilters((prev) => {
//       const updated = new Set(prev[type]);
//       checked ? updated.add(value) : updated.delete(value);
//       return { ...prev, [type]: Array.from(updated) };
//     });
//   };

//   return (
//     <Accordion defaultActiveKey="0" className="p-3 border rounded shadow-sm bg-light" style={{ minWidth: '250px' }}>
//       {/* Category Filter */}
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Category</Accordion.Header>
//         <Accordion.Body>
//           {categories.map((cat) => (
//             <Form.Check
//               key={cat}
//               type="checkbox"
//               label={cat}
//               value={cat}
//               onChange={(e) => handleCheckbox(e, 'category')}
//             />
//           ))}
//         </Accordion.Body>
//       </Accordion.Item>

//       {/* Price Filter */}
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Price</Accordion.Header>
//         <Accordion.Body>
//           {['₹0-₹300', '₹301-₹600', '₹601+'].map((range) => (
//             <Form.Check
//               key={range}
//               type="checkbox"
//               label={range}
//               value={range}
//               onChange={(e) => handleCheckbox(e, 'price')}
//             />
//           ))}
//         </Accordion.Body>
//       </Accordion.Item>

//       {/* Rating Filter */}
//       <Accordion.Item eventKey="2">
//         <Accordion.Header>Rating</Accordion.Header>
//         <Accordion.Body>
//           {[4.5, 4.0, 3.5].map((r) => (
//             <Form.Check
//               key={r}
//               type="checkbox"
//               label={`${r}+`}
//               value={r}
//               onChange={(e) => handleCheckbox(e, 'rating')}
//             />
//           ))}
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// };

// export default Sidebar;
