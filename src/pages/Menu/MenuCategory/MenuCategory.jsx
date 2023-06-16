import Cover from "../../Shared/Cover/Cover";
import MenuCard from "../../Shared/MenuCard/MenuCard";


const MenuCategory = ({items,title, img}) => {
    return (
       <div>
             <div className="my-8">
                {title && <Cover img={img} title={title}></Cover>}
             </div>
            <div className="grid md:grid-cols-2 gap-8">
            
                {items.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)}
            </div>
       </div>
    );
};

export default MenuCategory;