import logoImage from '../assets/images/logonew.png';
import MenuIcon from '../assets/icons/menu.svg';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(9,_90,_200),rgb(20,_225,_255),rgb(20,_225,_255),rgb(20,_225,_255),rgb(9,_90,_200))] blur-md"></div>
              <Image
                src={logoImage}
                alt="Saas logo"
                className="h-12 w-12 relative rounded-xl" // with relative image took precedence over the glow effect 
              />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="text-white sm:flex gap-8 items-center hidden">
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Projects
            </a>
            {/* <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Features
            </a> */}
            {/* <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Help
            </a> */}
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              About Me
            </a>
            <button className="bg-white py-2 px-4 rounded-lg text-black">
              Get my Resume
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

