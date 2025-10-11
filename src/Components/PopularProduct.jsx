import { useEffect, useState } from "react";
import { BsFillCupHotFill } from "react-icons/bs";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";
const PopularProduct = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(()=>{
        fetch('https://coffee-shop-server-two-kappa.vercel.app/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])
    return (
        <div className="my-16" style={{backgroundImage:`URL(${'/cup.png'}), url('/5.png')`, backgroundRepeat:"no-repeat, no-repeat", backgroundPosition: "left top, right bottom" }} >
            <div className="w-11/12 mx-auto">
            {/* header section */}
                <section className="flex flex-col gap-4 justify-center items-center"> 
                    <h4 className="text-lg font-normal">--- Sip & Savor ---</h4>
                <h2 className="choco font-semibold rancho text-4xl">Our Popular Products</h2>
                    <Link to={'/addCoffee'} className="flex items-center gap-2  rancho px-5 py-2 bg-[#E3B577] text-white font-medium text-2xl w-fit border-2 rounded-md border-[#331A15] hover:bg-white hover:text-black duration-200">Add Coffee <BsFillCupHotFill className="choco"/></Link>
                </section>
                {/* coffee card section */}
                <section className="my-10 md:w-[90%] xl:w-10/12 mx-auto sm:p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                        coffees.map(coffee=> <CoffeeCard 
                            coffees={coffees} setCoffees={setCoffees}
                            coffee={coffee} key={coffee._id}></CoffeeCard>)
                    }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PopularProduct;