export const MenuCard = ({showData})=>{
    return(
        <div>
            {showData?.map((item)=>(
            <div key={item.id} className="menu">
                <h2>Dishes by {item.name}</h2>
                <div className="menu-card">
                {item.menu?.map((food)=>(
                    <div className="menu-card-first">
                        <img src={food.imgSrc} alt="food" className="food-img"/>
                        <div className="menu-card-info">
                        <span className="menu-p1">{food.name}</span>
                        <span>{food.price} for {food.qty}</span>
                        <span>{item.name}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
          ))}  
        </div>
    )
}