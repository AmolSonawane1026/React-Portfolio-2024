// import React from "react";
// import "./Main.css";
// import BgVideo from "../../assets/Videos/EditedBgVideo.mp4";
// const Main = () => {
//   return (
//     <>
//       <main className="main-div">
//         <div className="overlay"></div>
//         <video autoPlay loop muted className="background-video">
//           <source src={BgVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="content">
//           <h1>Hello.👋 I'm <span className="mainSpan">Amol Sonawane</span></h1>
//           <p>Some description or subtext can go here.</p>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Main;


import React, { useState, useEffect } from "react";
import "./Main.css";
import BgVideo from "../../assets/Videos/EditedBgVideo.mp4";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Amol Sonawane",
  "Front End Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Logo Designer"
];

const Main = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); // Change role every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-div">
      <div className="overlay"></div>
      <video autoPlay loop muted className="background-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>
          Hello.👋 I'm{" "}
          <span className="mainSpan">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p>Some description or subtext can go here.</p>
      </div>
    </main>
  );
};

export default Main;
