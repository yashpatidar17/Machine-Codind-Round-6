import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DataContext } from "../../Context/DataContextProvider";
import "./res.css";
import { Modal } from "./Modal";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export const Restaurant = () => {
  const { resID } = useParams();
  const {  resData} = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const restaurant = resData.find((item) => item.id === parseInt(resID));
  

  const averageRating =
    restaurant?.ratings.reduce((acc, curr) => acc + curr.rating, 0) /
    restaurant.ratings.length;




  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="food-container">
      <div>
        <ArrowBackRoundedIcon onClick={()=>navigate("/")}/>
      </div>
      <div className="food-container-first">
        <h1>{restaurant.name}</h1>
        <div className="food-info">
          <div className="food-name">
            <p>{restaurant?.menu?.map((item) => (item.name)).join(', ')}</p>
          </div>
          <button onClick={openModal} className="cusine-btn">Add Review</button>
        </div>
        <div>
          <p>{restaurant.address}</p>
          <p>Average Rating : {averageRating.toFixed(1)}</p>
        </div>
        <hr />
        <div>
          <h1>Reviews</h1>
          <div>
            {restaurant?.ratings.map((item,index) => (
              <div key={index}>
                <div className="rating-second">
                  <div className="rating-first">
                    <img src={item.pp} className="avtr"/>
                    <span>{item.revName}</span>
                  </div>
                   
                  <p className="star">{item.rating}</p>
                  
                </div>
                <div>
                  <p>{item.comment}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>{isModalOpen && <Modal closeModal={closeModal} ID={restaurant.id} />}</div>
    </div>
  );
};
