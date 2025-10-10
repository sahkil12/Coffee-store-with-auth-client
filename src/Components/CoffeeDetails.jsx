import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {details, name, photo, price, quantity, supplier, taste} = coffee;
    return (
         <div className="py-10 max-w-[1280px] mx-auto">
      <div className="text-3xl flex items-center mx-3 gap-3 mt-6 mb-10 rancho hover:bg-[#D2B48C] rounded-md w-fit p-4 duration-200">
        <FaArrowLeftLong size={23} />
        <Link to={"/"} className="font-medium">
          Back To Home
        </Link>
      </div>
      <div className="bg-[#F4F3F0] rounded-lg p-6 sm:p-12 lg:p-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* image section */}
            <div className="flex justify-center">
                <img src={photo} alt={name}  className="h-full drop-shadow-md w-90"/>
            </div>
            {/* text section */}
            <div className="flex flex-col gap-4 justify-center">
                <h2 className="text-5xl font-medium mb-5 rancho drop-shadow-2xl choco">Niceties</h2>
                {/* detail of coffee */}
                <h3 className="text-xl text-neutral-600"><span className="font-bold choco">Name : </span>{name }</h3>
                <h3 className="text-xl text-neutral-600"><span className="font-bold choco">Price : </span>{price }</h3>
                <h3 className="text-xl text-neutral-600"><span className="font-bold choco">Supplier : </span>{supplier }</h3>
                <h3 className="text-xl text-neutral-600"><span className="font-bold choco">Taste : </span>{taste }</h3>
                <h3 className="text-xl text-neutral-600"><span className="font-bold choco">Quantity : </span>{quantity }</h3>
                <h3 className="text-xl text-neutral-600"><span className="font-bold choco">Details : </span>{details}</h3>
            </div>
      </div>
    </div>
    );
};

export default CoffeeDetails;