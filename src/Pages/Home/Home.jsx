import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Categories from "./Categories";
import Facts from "./Facts";
import FeaturedTrainings from "./FeaturedTrainings";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import TopSkills from "./TopSkills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSkills></TopSkills>
            <AboutUs></AboutUs>  
            <Facts></Facts>
            {/* <FeaturedTrainings></FeaturedTrainings>          */}
            <Categories></Categories>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>        
        </div>
    );
};

export default Home;