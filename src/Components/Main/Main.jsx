

// import React, { useState, useEffect } from "react";
// import "./Main.css";
// import BgVideo from "../../assets/Videos/EditedBgVideo.mp4";
// import { motion, AnimatePresence } from "framer-motion";

// const roles = [
//   "Amol Sonawane",
//   "Front End Developer",
//   "UI/UX Designer",
//   "Graphic Designer",
//   "Logo Designer"
// ];

// const Main = () => {
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }, 4000); // Change role every 2 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="main-div">
//       <div className="overlay"></div>
//       <video autoPlay loop muted className="background-video">
//         <source src={BgVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="content">
//         <h1>
//           Hello.👋 I'm{" "}
//           <span className="mainSpan">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={roles[currentRoleIndex]}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {roles[currentRoleIndex]}
//               </motion.span>
//             </AnimatePresence>
//           </span>
//         </h1>
//         <p>Some description or subtext can go here.</p>
//       </div>
//     </main>
//   );
// };

// export default Main;


import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import BgVideo from "../../assets/Videos/EditedBgVideoCom.mp4";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Amol Sonawane",
  "Front End Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Logo Designer"
];

const typingSpeed = 100; // Speed of typing effect in milliseconds
const erasingSpeed = 50; // Speed of erasing effect in milliseconds

const Main = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const spanRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + currentRole[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);

        if (textIndex >= currentRole.length - 1) {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    } else if (isDeleting) {
      const deletingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        setTextIndex((prevIndex) => prevIndex - 1);

        if (textIndex <= 0) {
          setIsDeleting(false);
          setIsTyping(true);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTextIndex(0);
          clearInterval(deletingInterval);
        }
      }, erasingSpeed);

      return () => clearInterval(deletingInterval);
    }
  }, [isTyping, isDeleting, textIndex, currentRoleIndex]);

  useEffect(() => {
    setDisplayedText("");
    setTextIndex(0);
    setIsTyping(true);
    setIsDeleting(false);
  }, [currentRoleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); // Change role every 4 seconds
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
          <span className="mainSpan" ref={spanRef}>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {displayedText}
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
