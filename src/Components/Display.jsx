const Display = () => {
  return (
    <div className="bg-[#ECEAE3] p-4 lg:p-10 ">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-10/12 mx-auto ">
        {/* box-1 */}
         <div className="flex flex-col gap-3 ">
        <img src="/1.png" className="w-16 h-16" alt="" /> 
        <h2 className="rancho text-3xl font-medium choco">Awesome Aroma</h2>
        <p className="w-4/6 font-normal sma">You will definitely be a fan of the design & aroma of your coffee</p>   
      </div>
        {/* box-2 */}
         <div className="flex flex-col gap-3">
        <img src="/2.png" className="w-16 h-16" alt="" /> 
        <h2 className="rancho text-3xl font-medium choco">High Quality</h2>
        <p className="w-4/6 font-normal sma">We served the coffee to you maintaining the best quality</p>   
      </div>
        {/* box-3 */}
         <div className="flex flex-col gap-3">
        <img src="/3.png" className="w-16 h-16" alt="" /> 
        <h2 className="rancho text-3xl font-medium choco">Pure Grades</h2>
        <p className="w-4/6 font-normal sma">The coffee is made of the green coffee beans which you will love</p>   
      </div>
        {/* box-4 */}
         <div className="flex flex-col gap-3">
        <img src="/4.png" className="w-16 h-16" alt="" /> 
        <h2 className="rancho text-3xl font-medium choco">Proper Roasting</h2>
        <p className="w-4/6 font-normal sma">Your coffee is brewed by first roasting the green coffee beans</p>   
      </div>
     </div>
    </div>
  );
};

export default Display;
