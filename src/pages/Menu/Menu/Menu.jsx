import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

import MenuCategory from "../MenuCategory/MenuCategory";




const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item=> item.category ==='offered');
    const dessert = menu.filter(item=> item.category ==='dessert');
    const soup = menu.filter(item=> item.category ==='soup');
    const salad = menu.filter(item=> item.category ==='salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} img={dessertImg} title="Dessert" ></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title="soup" ></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title="salad" ></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title="pizza" ></MenuCategory>
           
        </div>
    );
};

export default Menu;