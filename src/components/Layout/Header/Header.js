import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productService from "../../../services/productServices";
import BoxSearch from "./BoxSearch/BoxSearch";
import banner from "../../img/LG-nike-fixx.jpg";
import logo from "../../img/logo-bar.jpg";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import styles from "./Header.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Header() {
  const [keyWord, setKeyWord] = useState("");
  const [showProducts, setShowProducts] = useState([]);
  const reset = () => {
    setKeyWord("");
  };
  useEffect(() => {
    const filterByKeyName = async (keyWord) => {
      const data = await productService.filterByKeyName(keyWord);
      setShowProducts(data);
      console.log(keyWord);
      console.log(data);
    };
    const timeOut = setTimeout(() => {
      filterByKeyName(keyWord);
    }, 300);
    return () => clearTimeout(timeOut);
  }, [keyWord]);

  return (
    <>
      <div className={cx("banner")}>
        <img src={banner} className={cx("img")} alt="" />
      </div>
      <div className={cx("menu-bar")}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className={cx("col-md-2", "nav-b")}>
              <Link to="/">
                <img src={logo} className={cx("lg-bar")} alt="///" />
              </Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/men">Men</Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/women">Women</Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/kids">Kids</Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/productlist">Customise</Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/about">About</Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={cx("col-md-1", "nav-c", "mt-2")}>
              <Link to="/login">Login</Link>
            </div>
            <div className="col-md-2">
              <div className={cx("search-bar")}>
                <input
                  placeholder="Search"
                  type="text"
                  className={cx("search-in")}
                  onChange={e => setKeyWord(e.target.value.trim())}
                />
                <span className={cx("s-icon")}>
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
            <div className={cx("col-md-1", "nav-b")}>
              <Link to="/cart" className={cx("cart-icon")}>
                <AiOutlineShoppingCart />
              </Link>
            </div>
            <div className={cx("col-md-1", "nav-d")}>
              <Link to="/cart" className={cx("cart-icon")}>
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
        {keyWord !== "" && (
          <BoxSearch keyWord={keyWord} data={showProducts} reset={reset} />
        )}
      </div>
    </>
  );
}

export default Header;
