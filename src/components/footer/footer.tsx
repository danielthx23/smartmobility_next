import { FaCopyright, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex mb-24 md:mb-0 justify-end w-full bg-[#3E5179] py-8 sm:text-sm text-white">
    <div className="flex flex-col gap-4 px-6">
    <div className="flex text-white gap-4 items-center font-lilita text-xl">
          <p className="flex items-center">
            Mêtro Smart <FaCopyright className="mx-1" /> 2024
          </p>
          <span className="border-l border-white h-4"></span>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>

      <div className="flex gap-4">
        <a href="#" className="text-neutral-800">
          <FaFacebook size={42} />
        </a>
        <a href="#" className="text-neutral-800">
          <FaInstagram size={42} />
        </a>
        <a href="#" className="text-neutral-800">
          <FaXTwitter size={42} />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
