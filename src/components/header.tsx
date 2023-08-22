import { motion } from "framer-motion";
import Image from "next/image";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface HeaderProps {
  title: string;
  image: string;
  subTitle?: string;
}

const Header = ({ title, subTitle, image }: HeaderProps) => (
  <div className="bg-white col-start w-full h-[40vh] relative border-slate-300 border border-t-0 rounded-t-xl overflow-hidden">
    <div className="bg-black absolute z-10 inset-0 opacity-50" />
    <motion.h1
      className={`${inter.className} text-8xl text-white relative subpixel-antialiased z-50 flex flex-col justify-center items-center h-full font-black`}
      initial={{ opacity: 0, scale: 0.95, y: 10 }} // initial state
      animate={{ opacity: 1, scale: 1, y: 0 }} // final state
      transition={{ duration: 0.5 }} // transition settings
    >
      <span>{title}</span>
      {subTitle && (
        <span className="text-white text-3xl text-center block mt-4 font-thin">
          {subTitle}
        </span>
      )}
    </motion.h1>
    <Image src={image} alt="Image" fill className="object-cover" />
  </div>
);

export default Header;
