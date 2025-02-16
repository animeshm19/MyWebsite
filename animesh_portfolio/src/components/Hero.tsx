'use client';

import Image from 'next/image';
import Keyboard from '../assets/images/keyboard.png';
import {motion,useScroll, useTransform} from "framer-motion"
import { useEffect, useRef } from 'react';
import { GradualSpacing } from './GradualSpacing';

export const Hero = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const {scrollYProgress} = useScroll({
    target:appImage,
    offset:['start end','end end']
  });
  const rotateX = useTransform(scrollYProgress,[0,1],[15,0])
  const opacity=useTransform(scrollYProgress,[0,1],[.5,1])
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#001332_54%,#001332_82%,#000)] py-[72px] sm:py-24 relative overflow-clip">
    <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center'><GradualSpacing text="Animesh Mittal" /></h1>
    <br /><br />
      <div className="container relative">

        <div className="flex justify-center mt-8">
          
          <div className="inline-flex relative">
          
          
          <motion.div
            style={{
              opacity,
              rotateX,
              transformPerspective: "800px",
            }}
          >
            <div className="relative inline-block">
              <Image
                src={Keyboard}
                alt="The product screenshot"
                layout="intrinsic"
                className="rounded-xl transition-all duration-300 hover:scale-105 drop-shadow-[0_35px_35px_rgba(100,100,150,0.7)]"
                ref={appImage}
              />
              
            </div>
          </motion.div>

          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-14 max-w-lg">
            I'm a Junior persuing Bachelor of Science in Computing Science Specialization at University of Alberta.
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
              Get for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};