import React, { useState } from "react";
import "./modal.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";

export const Modal = ({ closeModal, ID }) => {
  const { resData, setResData } = useContext(DataContext);
  const [Rating, setRating] = useState(0);
  const [Comment, setComment] = useState("");
  const [Name, setName] = useState("");
  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleNameChange = (e) => {
    const { value } = e.target;

    if (value.length === 0) {
      setName("pata nhi");
    } else {
      setName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedResData = resData.map((item) => {
      if (item.id === parseInt(ID)) {
        return {
          ...item,
          ratings: [
            ...item.ratings,
            {
              rating: Rating,
              comment: Comment,
              revName: Name,
              pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
            },
          ],
        };
      }
      return item;
    });

    setResData(updatedResData);

    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
        <h2>Add Your Review</h2>
        <hr/>
        </div>
        <div >
        <form onSubmit={handleSubmit} className="modal-first">
          <label>
            Rating:
            <select value={Rating} onChange={handleRatingChange}>
              <option value={0}>Select rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <label>
            Comment:
            <input value={Comment} onChange={handleCommentChange} />
          </label>
          <label>
            Name:
            <input value={Name} onChange={handleNameChange} />
          </label>
          <div className="button">
          <button type="submit">Submit</button>
          </div>
        </form>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
