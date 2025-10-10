import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="py-16" style={{ backgroundImage: `URl(${"/13.jpg"})` }}>
        <div className="w-11/12 md:w-[80%] mx-auto px-6 ">
          <img src="/logo1.png" className="w-20 h-20" alt="" />
        </div>
        <div className="w-11/12 md:w-[80%] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-18">
          <section className="flex flex-col gap-4">
            <h2 className="text-5xl font-semibold flex text-[#331A15] items-center gap-3 my-4  rancho">
              Espresso Emporium
            </h2>
            <p className="text-lg font-normal">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-4 my-3">
              <FaFacebook size={28} />
              <IoLogoLinkedin size={28} />
              <FaTwitter size={28} />
              <FaInstagram size={28} />
            </div>
            <h3 className="text-[#331A15] text-4xl font-semibold rancho">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 text-lg font-sans">
                <FaPhoneAlt></FaPhoneAlt> +88 01533 333 333
              </h2>
              <h2 className="flex items-center gap-3 text-lg font-sans">
                <IoMdMail></IoMdMail> info@gmail.com
              </h2>
              <h2 className="flex items-center gap-3 text-lg font-sans">
                <IoLocationSharp></IoLocationSharp> 72, Wall street, King Road,
                Dhaka
              </h2>
            </div>
          </section>
          <section className="flex flex-col gap-3 px-5 ">
            <h2 className="text-5xl font-semibold flex text-[#331A15] items-center gap-3 my-4 rancho">
              Connect with Us
            </h2>
            <div className="sm:w-10/12 lg:w-4/5 space-y-5">
              <input
                type="text"
                className="input text-lg w-full py-6 rounded-lg border-neutral-300 focus:shadow-2xl focus:border-[#d1ab7a9f] focus:outline-none focus:border-2 "
                placeholder="Name"
              />
              <input
                type="email"
                className="input text-lg w-full py-6 rounded-lg border-neutral-300 focus:shadow-2xl focus:border-[#d1ab7a9f] focus:outline-none focus:border-2 "
                placeholder="Email"
              />
              <textarea className="textarea w-full text-lg border-neutral-300 focus:shadow-2xl focus:border-[#d1ab7a9f] focus:outline-none focus:border-2 " placeholder="Message"></textarea>
              <button className="border-2 rounded-full px-5 py-1 rancho text-xl hover:bg-[#E3B577] duration-150">Send Message</button>
            </div>
          </section>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${'/24.jpg'})` }} className="py-4 w-full object-cover bg-center text-white flex gap-2 justify-center items-center rancho">
            <h2 className="text-2xl opacity-95">Copyright Espresso Emporium ! All Rights Reserved</h2>
        </div>
    </div>
  );
};

export default Footer;
