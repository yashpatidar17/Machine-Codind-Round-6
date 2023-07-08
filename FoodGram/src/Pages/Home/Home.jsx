import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import "./home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const { cusData,cuisineHandler,showData } = useContext(DataContext);
 
  return (
    <div className="home">
      <h1>Food Ordering App </h1>
      <h2>Select Your Cusine :</h2>
      <div className="cusine-card">
        {cusData.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => cuisineHandler(item.id)}
              className="cusine-btn"
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

      <div>

          {showData?.map((item)=>(
            <div key={item.id} className="menu">
                <Link to={`/restaurant/${item.id}`}><h2>Dishes by {item.name}</h2></Link>
                
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


    </div>
  );
};
