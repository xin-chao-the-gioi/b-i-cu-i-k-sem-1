/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import banner from "../../img/9_banner_nike.jpg";
import bannersale from "../../img/banner-sale-1.png";
import classNames from "classnames/bind";
import style from "./home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Home() {
  const url = "http://localhost:9090/product";
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}?_limit=9`)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <main>
        <div>
          <img className="h-banner card-img" src={banner} />
        </div>

        <div className="container">
          <img src={bannersale} className={cx("sale-ban")} />

          <h3 className="title-text py-5">TOP SHOES</h3>
          <div className={cx("row", "main-pro")}>
            {apiData.map((items, index) => {
              return (
                <div className="col-lg-4 mt-5" key={index}>
                  <Link to={`/detail/${items.id}`}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={items.img}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-text text-dark text-decoration-none">{items.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
