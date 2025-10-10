import Hero from "./Hero";
import Display from "./Display";
import PopularProduct from "./PopularProduct";
import FollowUs from "./FollowUs";

const Home = () => {
    return (
        <div>
         <Hero></Hero>
         <Display></Display>
         <PopularProduct></PopularProduct>
         <FollowUs></FollowUs>
        </div>
    );
};

export default Home;