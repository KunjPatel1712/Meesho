// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const Sidebar = () => {
//   // multilevel filtering
//   const [searchparams, setsearchparams] = useSearchParams();

//   const [gender, setgender] = useState(searchparams.getAll("category") || []);
//   console.log(gender);

//   const handlechange = (e) => {
//     const { value } = e.target;

//     let newarray = [...gender];

//     if (gender.includes(value)) {
//       newarray = gender.filter((el) => el != value);
//     } else {
//       newarray.push(value);
//     }
//     setgender(newarray);
//   };
//   useEffect((e) => {
//     e.preventDefualt()
//     setsearchparams({ category: gender });
//   }, [gender]);

//   return (
//     <div>
//       Mens
//       <input
//         type="checkbox"
//         value={"Kids"}
//         onChange={(e) => handlechange(e)}
//         checked={gender.includes("Kids")}
//       ></input>
//       <br></br>
//       woens{" "}
//       <input
//         type="checkbox"
//         value={"Men's clothing"}
//         onChange={(e) => handlechange(e)}
//         checked={gender.includes("Men's clothing")}
//       ></input>
//       <br></br>
//       electronics{" "}
//       <input
//         type="checkbox"
//         value={"Mobile Accessories"}
//         onChange={(e) => handlechange(e)}
//         checked={gender.includes(" Mobile Accessories")}
//       ></input>
//       <br></br>
//       jewelery{" "}
//       <input
//         type="checkbox"
//         value={"Women'S Fashion"}
//         onChange={(e) => handlechange(e)}
//         checked={gender.includes("Women's Fashion")}
//       ></input>
//     </div>
//   );
// };

// export default Sidebar;
