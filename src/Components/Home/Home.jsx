import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Facts from "./Facts";
import Subscribe from "./Subscribe";
import TopSkills from "./TopSkills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSkills></TopSkills>
            <AboutUs></AboutUs>  
            <Facts></Facts>         
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;