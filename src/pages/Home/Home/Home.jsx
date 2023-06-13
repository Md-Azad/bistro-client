import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Notice from "../Notice/Notice";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Notice></Notice>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;