import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffeeData = () => {
  const coffee = useLoaderData();
  const { _id, details, name, photo, price, quantity, supplier, taste } =
    coffee;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    // update data ---
    fetch(`https://coffee-shop-server-two-kappa.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee details Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="py-10 max-w-[1380px] mx-auto">
      <div className="text-3xl flex items-center mx-3 gap-3 mt-6 mb-10 rancho hover:bg-[#D2B48C] rounded-md w-fit p-4 duration-200">
        <FaArrowLeftLong size={23} />
        <Link to={"/"} className="font-medium">
          Back To Home
        </Link>
      </div>

      <div className="bg-[#F4F3F0] rounded-lg p-6 sm:p-12 lg:p-16">
        <div className="text-center space-y-6 ">
          <h2 className="text-5xl font-semibold rancho text-[#374151] drop-shadow-2xl">
            Update Existing Coffee Details
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
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={price}
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
                defaultValue={details}
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
              defaultValue={photo}
              className="input text-base w-full border-neutral-200 py-6 focus:outline-none "
              placeholder="Enter photo URL"
            />
          </fieldset>
          {/* button */}
          <button className="rancho my-6 rounded-md bg-[#D2B48C] w-full py-2 text-2xl font-medium border-2 border-[#331A15] ">
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffeeData;
