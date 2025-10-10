import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const CoffeeCard = ({coffee}) => {
    const {_id, photo, price, name, supplier} = coffee;
    // delete function--
    const handleDeleteCoffee = (id)=>{
        alert(id)
        // 
        fetch(``)
    }

    return (
    <div className="flex items-center justify-around bg-[#F5F4F1] rounded-xl p-4 sm:px-6 sm:py-6  gap-6">
      {/* Product Image */}
      <div className="w-28 h-28 xl:w-46 xl:h-56">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className=" lg:text-xl space-y-3">
        <p className="sma font-semibold">
          Name: <span className="font-normal text-neutral-500">{name}</span>
        </p>
        <p className="sma font-semibold">
          Chef: <span className="font-normal text-neutral-500">{supplier}</span>
        </p>
        <p className="sma font-semibold">
          Price: <span className="font-normal text-neutral-500">{price} Taka</span>
        </p>
      </div>

      {/* Action Icons */}
      <div className="flex flex-col gap-3 md:gap-5 ">
        {/* details button */}
        <button
          className="p-2 md:p-3 rounded-md bg-[#d9c6a1] hover:opacity-85"
        >
          <FaEye className="text-white" />
        </button>
        {/* edit details button */}
        <button
          className="p-2 md:p-3 rounded-md bg-black hover:opacity-85"
        >
          <FaEdit className="text-white" />
        </button>
        {/* delete button */}
        <button
        onClick={()=> handleDeleteCoffee(_id)}
          className="p-2 md:p-3 rounded-md bg-red-500 hover:opacity-85"
        >
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );

};

export default CoffeeCard;