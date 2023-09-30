// import React, { useEffect, useState } from "react";

// const CommunitySection = () => {
//   const [communityData, setCommunityData] = useState([]);

//   useEffect(() => {
//     fetch("/community")
//       .then((response) => response.json())
//       .then((data) => {
//         setCommunityData(data);
//       })
//       // .catch((error) => {
//         console.error("Error fetching community data:", error);
//       });
//   }, []);

//   return (
//     <section className="app-section app-section--community">
//       <h2 className="app-title">
//         Big Community of <br /> People Like You
//       </h2>
//       <h3 className="app-subtitle">
//         We’re proud of our products, and we’re really excited
//         <br /> when we get feedback from our users.
//       </h3>
//       <div className="testimonials-container">
//         {communityData.map((person) => (
//           <div key={person.id} className="testimonial">
//             <img
//               className="testimonial-img"
//               src={person.avatar}
//               alt={`${person.firstName} ${person.lastName}`}
//             />
//             <p className="testimonial-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolor.
//             </p>
//             <div className="testimonial-author">
//               <div className="testimonial-author-firstname">
//                 {person.firstName}
//               </div>
//               <div className="testimonial-author-lastname">
//                 {person.lastName}
//               </div>
//             </div>
//             <div className="testimonial-position">{person.position}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CommunitySection;
