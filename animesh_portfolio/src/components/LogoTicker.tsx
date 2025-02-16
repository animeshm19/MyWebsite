/* eslint-disable react/no-unescaped-entities */
'use client';

import CMPUT174 from '../assets/images/174.png'
import CMPUT175 from '../assets/images/175.png'
import CMPUT195 from '../assets/images/195.png'
import CMPUT200 from '../assets/images/200.png'
import CMPUT201 from '../assets/images/201.png'
import CMPUT204 from '../assets/images/204.png'
import CMPUT206 from '../assets/images/206.png'
import CMPUT267 from '../assets/images/267.png'
import CMPUT272 from '../assets/images/272.png'
import CMPUT291 from '../assets/images/291.png'
import CMPUT301 from '../assets/images/301.png'
import CMPUT365 from '../assets/images/365.png'
import CMPUT366 from '../assets/images/366.png'
import CMPUT469 from '../assets/images/469.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: CMPUT174, alt: '174' },
  { src: CMPUT175, alt: '175' },
  { src: CMPUT195, alt: '195' },
  { src: CMPUT200, alt: '200' },
  { src: CMPUT201, alt: '201' },
  { src: CMPUT204, alt: '204' },
  { src: CMPUT206, alt: '206' },
  { src: CMPUT267, alt: '267' },
  { src: CMPUT272, alt: '272' },
  { src: CMPUT291, alt: '291' },
  { src: CMPUT301, alt: '301' },
  { src: CMPUT365, alt: '365' },
  { src: CMPUT366, alt: '366' },
  { src: CMPUT469, alt: '469' },

];

export const LogoTicker = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#001332_92%] text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Courses Completed at University of Alberta
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:z-10 before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#001332_82,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#001332_82,rgb(0,0,0,0))]">
          <motion.div
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex gap-16 sm:flex-none pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
