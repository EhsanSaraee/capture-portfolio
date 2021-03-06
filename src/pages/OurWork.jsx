import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Import Animations
import { motion } from "framer-motion";
import {
   fade,
   pageAnimation,
   photoAnimation,
   lineAnimation,
   sliderContainer,
   slider,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
   const [element, controls] = useScroll();
   const [element2, controls2] = useScroll();
   return (
      <Work
         variants={pageAnimation}
         initial="hidden"
         animate="show"
         exit="exit"
         style={{ background: "#fff" }}
      >
         <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
         </motion.div>
         <Movie>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to="/work/the-athlete">
               <Hide>
                  <motion.img
                     variants={photoAnimation}
                     src={athlete}
                     alt="athlete"
                  />
               </Hide>
            </Link>
         </Movie>
         <Movie
            ref={element}
            variants={fade}
            initial="hidden"
            animate={controls}
         >
            <h2>The Racer</h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to="/work/the-racer">
               <img src={theracer} alt="theracer" />
            </Link>
         </Movie>
         <Movie
            ref={element2}
            variants={fade}
            initial="hidden"
            animate={controls2}
         >
            <h2>Good Times</h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to="/work/good-times">
               <img src={goodtimes} alt="goodtimes" />
            </Link>
         </Movie>
         <ScrollTop />
      </Work>
   );
};

// Styled Components
const Work = styled(motion.div)`
   min-height: 100vh;
   overflow: hidden;
   padding: 4rem 8rem;
   @media (max-width: 1300px) {
      padding: 1rem;
   }
   h2 {
      padding: 1rem 0;
   }
`;

const Movie = styled(motion.div)`
   padding-bottom: 10rem;
   .line {
      height: 0.2rem;
      background: #23d997;
      margin-bottom: 3rem;
   }
   img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`;
const Hide = styled.div`
   overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
   position: fixed;
   left: 0;
   top: 10%;
   width: 100%;
   height: 100vh;
   background: #fffebf;
   z-index: 2;
`;

const Frame2 = styled(Frame1)`
   background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
   background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
   background: #8effa0;
`;

export default OurWork;
