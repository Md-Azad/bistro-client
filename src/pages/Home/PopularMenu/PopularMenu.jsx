
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item=> item.category ==='popular');

    return (
        <section>
            <SectionTitle
            subHeading={"From Our Menu"}
            heading={"popular menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
               
                {popularMenu.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)}
            </div>
        </section>
    );
};

export default PopularMenu;