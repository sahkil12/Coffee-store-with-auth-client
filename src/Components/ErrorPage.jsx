import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <div className="my-8 max-h-[calc(100vh-100px)] flex flex-col items-center justify-center">
                <Link to={'/'} className="text-4xl flex gap-2 items-center mt-6 rancho text-center">  <FaArrowLeftLong size={23} /> Back to home</Link>
                <img src="/404.gif" className="w-fit p-5 sm:p-10" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;