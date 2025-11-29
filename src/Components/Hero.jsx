
const Hero = () => {
    return (
        <div>
             <div style={{ backgroundImage: `url(${'/hero.png'})` , backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize: 'cover'}} className="h-[620px] md:h-[750px] w-full text-white flex items-center rancho justify-end">
          <div className="flex flex-col gap-6 md:w-2/4 mx-6">
            <h2 className="text-5xl font-medium">Would you like a Cup of Delicious Coffee?</h2>
            <p className="font-sans md:w-10/12 text-base/relaxed opacity-80">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="text-2xl font-medium w-fit px-6 py-2 text-[#242222] bg-[#E3B577] border-[#E3B577] border-2 hover:border-white hover:text-white hover:bg-neutral-900 duration-200">Learn More</button>
          </div>
        </div>
        </div>
    );
};
export default Hero;