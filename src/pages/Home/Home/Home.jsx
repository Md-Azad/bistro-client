import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Notice from "../Notice/Notice";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommendation from "../Recommendation/Recommendation";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Notice></Notice>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommendation></Recommendation>
            <Featured></Featured>
        </div>
    );
};

export default Home;