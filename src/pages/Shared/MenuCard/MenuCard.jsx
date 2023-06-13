

const MenuCard = ({item}) => {
    const {name, image,price, recipe} = item;
    return (
        <div className="flex space-x-4 mb-8">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <h1 className="text-yellow-500">${price}</h1>
          
        </div>
    );
};

export default MenuCard;