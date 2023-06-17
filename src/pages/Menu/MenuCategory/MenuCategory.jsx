import { Link } from "react-router-dom";
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
            <div className="text-center mb-4">
                {
                    title && <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 text-green-800 mt-4 ">Order Now!</button></Link>
                }
            </div>
            
       </div>
    );
};

export default MenuCategory;