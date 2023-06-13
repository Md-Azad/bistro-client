import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{ 
            const popularMenu = data.filter(item=> item.category ==='popular');
            setMenu(popularMenu);
        })
    },[]);
    return (
        <section>
            <SectionTitle
            subHeading={"From Our Menu"}
            heading={"popular menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
               
                {menu.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)}
            </div>
        </section>
    );
};

export default PopularMenu;