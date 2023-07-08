import { createContext, useReducer, useState } from "react";
import { reducer } from "../Reducer/Reducer";
import { cuisineData, restaurantsData } from "../DB/AppData";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const initialState = { showData: [] };
  const [dataState, dispatch] = useReducer(reducer, initialState);
  const [cusData, setCusData] = useState(cuisineData);
  const [resData, setResData] = useState(restaurantsData);
  const [showData, setshowData] = useState(null);

  const cuisineHandler = (id) => {
   
    setshowData(resData.filter((item) => item.cuisine_id === id));
  };

  console.log(resData);
  return (
    <div>
      <DataContext.Provider
        value={{
          cusData,
          resData,
          dispatch,
          dataState,
          showData,
          cuisineHandler,
          setResData
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
