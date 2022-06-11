import React from "react";
import style from "../Component/Navbar.Module.Css";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className={style.navbar}>
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/cart">Cart({cart.length})</Link>
      </div>
      <div className={style.imageContainer}>
        <img
          className={style.image}
          src="https://www.seekpng.com/png/full/409-4097069_fw-1-e-commerce-banner-png.png"
          alt="an im"
        />
      </div>
        <hr/>
    </div>
  );
};

export default Navbar;