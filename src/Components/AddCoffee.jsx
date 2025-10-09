import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // post data ---
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire({
            title: "Coffee Added SuccessFully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="py-10 max-w-[1380px] mx-auto">
      <div className="text-3xl flex items-center mx-3 gap-3 mt-6 mb-10 rancho">
        <FaArrowLeftLong size={23} />
        <Link to={"/"} className="font-medium">
          Back To Home
        </Link>
      </div>

      <div className="bg-[#F4F3F0] rounded-lg p-6 sm:p-12 lg:p-16">
        <div className="text-center space-y-6 ">
          <h2 className="text-5xl font-semibold rancho text-[#374151]">
            Add New Coffee
          </h2>
          <p className="text-lg/relaxed opacity-90 md:w-9/12 mx-auto text-neutral-600">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        {/* form  */}
        <form onSubmit={handleFormSubmit}>
          {/* form with 2 input*/}
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {/* 1 */}
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input text-base w-full py-6 border-neutral-200 focus:outline-none "
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
                placeholder="Enter coffee Quantity"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
                placeholder="Price"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Details
              </label>
              <input
                type="text"
                name="details"
                className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          {/* single field */}
          <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
              placeholder="Enter photo URL"
            />
          </fieldset>
          {/* button */}
          <button className="rancho my-6 rounded-md bg-[#D2B48C] w-full py-2 text-2xl font-medium border-2 border-[#331A15]">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
