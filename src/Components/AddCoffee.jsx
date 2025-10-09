const AddCoffee = () => {
    const handleFormSubmit = e =>{
        e.preventDefault()
    }
  return (
    <div className="py-10 ">
      <div className="bg-[#F4F3F0] rounded-lg max-w-[1380px] mx-auto p-16">
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
            <label className="label text-base font-medium text-black">Name</label>
          <input type="text" className="input text-base w-full py-6 border-neutral-200 focus:outline-none " placeholder="Enter coffee name" />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">Chef</label>
          <input type="text" className="input text-base w-full border-neutral-200 py-6 focus:outline-none " placeholder="Enter coffee chef" />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">Supplier</label>
          <input type="text" className="input text-base w-full border-neutral-200 py-6 focus:outline-none " placeholder="Enter coffee supplier" />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">Taste</label>
          <input type="text" className="input text-base w-full border-neutral-200 py-6 focus:outline-none " placeholder="Enter coffee taste" />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">Category</label>
          <input type="text" className="input text-base w-full border-neutral-200 py-6 focus:outline-none " placeholder="Enter coffee category" />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">Details</label>
          <input type="text" className="input text-base w-full border-neutral-200 py-6 focus:outline-none " placeholder="Enter coffee details" />
          </fieldset>
        </div>
        {/* single field */}
        <fieldset className="flex flex-col gap-2">
            <label className="label text-base font-medium text-black">Photo</label>
          <input type="text" className="input text-base w-full border-neutral-200 py-6 focus:outline-none " placeholder="Enter photo URL" />
          </fieldset>
          {/* button */}
          <button className="rancho my-6 rounded-md bg-[#D2B48C] w-full py-2 text-2xl font-medium border-2 border-[#331A15]">Add Coffee</button>
    </form>
      </div>
    </div>
  );
};

export default AddCoffee;
