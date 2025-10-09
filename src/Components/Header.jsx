
const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${'/15.jpg'})` }} className="h-36 w-full object-cover bg-center text-white flex gap-2 justify-center items-center rancho">
            <img src="/logo1.png" alt="" className="w-18 h-18" />
            <h2 className="text-4xl sm:text-5xl opacity-90">Espresso Emporium</h2>
        </div>
    );
};

export default Header;