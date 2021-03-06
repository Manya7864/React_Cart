import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import style from "../Pages/Grid.Module.css";
import { ItemContext } from "../Contexts/ItemContext";

const Electronics = () => {
  const [items, setItems] = useState([]);
  const { getClickedItem } = useContext(ItemContext);

  //importing contexts
  const handleClick = (item) => {
    getClickedItem(item);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/electronics`)
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className={style.grid}>
      {items.map((item) => (
        <div key={item.id} className={style.gridItem}>
          <img src={item.image} alt="" />
          <h3>Title : {item.title}</h3>
          <h3>Price : {item.price}</h3>
          <h3>Rating : {item.rating.rate}</h3>
          <button
            className={style.viewDetailsBtn}
            onClick={() => {
              handleClick(item);
            }}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Electronics;