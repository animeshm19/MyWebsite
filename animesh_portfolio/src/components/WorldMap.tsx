'use client'

import Image from 'next/image';
import worldMap from '../assets/images/worldmap.png';
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from 'react';

export const WorldMap = () => {
    const hoverVariants = {
        hover: {
          scale: 1.1, // Zooms in the image
          y: -30, // Moves the image slightly up
          transition: {
            duration: 0.5,
            type: 'spring'
          }
        },
        initial: {
          scale: 1,
          y: 0
        }
      };

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#002b72_54%,#00377a_65%,#001332_82%)] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter relative">
        World Map
        </h2>
        <motion.div
          whileHover="hover"
          initial="initial"
          variants={hoverVariants}
          style={{ perspective: "800px" }} // Optional for added depth effect
        >
          <Image
            src={worldMap}
            alt="The product screenshot"
            className="container mt-14 rounded-xl"
          />
        </motion.div>
      </div>
      
    </div>
  );
};
