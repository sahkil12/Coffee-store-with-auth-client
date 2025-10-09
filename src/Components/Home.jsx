import { useLoaderData } from "react-router";
import Hero from "./Hero";

const Home = () => {
    const coffees = useLoaderData([])
    console.log(coffees);
    return (
        <div>
         <Hero></Hero>
        </div>
    );
};

export default Home;