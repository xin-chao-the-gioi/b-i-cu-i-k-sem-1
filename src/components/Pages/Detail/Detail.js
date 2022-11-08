import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./detail.module.css";

const cx = classNames.bind(style);

function Detail() {
  const [apiData, setApiData] = useState({});
  const url = "http://localhost:9090/product";
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);


  const addToCartt = (data) => {
    if(JSON.parse(localStorage.getItem("cart") === null)){
      
      localStorage.setItem("cart", JSON.stringify([]))
    }
    var cartss = JSON.parse(localStorage.getItem("cart"), "[]");
    console.log(cartss);
    var newItem = {
      ...data,
    };
    console.log(newItem);
    cartss.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartss));

    navigate("/cart");
  };

  return (
    <main>
      <div className={cx("prod-details", "container")}>
        <div className="row">
          <div className={cx("col-lg-6", "mt-3")}>
            <img src={apiData.img} alt="" className={cx("imgcard")} />
          </div>
          <div className="col-lg-6 mt-3">
            <h2>{apiData.name}</h2>
            <p className="mt-2">Price: {apiData.price} </p>
            <p>
              About: Air Jordan 1 KO, which is releasing in a classic “Chicago”
              colorway and will arrive in other makeups this summer. Like the
              original Air Jordan 1, it’s a true heritage style that made its
              debut in the ’80s — the summer of 1985, to be precise. Quite
              unlike the Air Jordan 1, though, its upper is made entirely of
              canvas for a decidedly relaxed look. Even more unlike the Air
              Jordan 1, a shoe that has been dissected ad nauseam, the KO has
              long been shrouded in mystery.
            </p>
            <p>Size: </p>
            <div className={cx("sizing")}>
              <button className="btn btn-dark">36</button>{" "}
              <button className="btn btn-dark"> 37 </button>
              <button className="btn btn-dark ml-1">38</button>{" "}
              <button className="btn btn-dark">39</button>{" "}
              <button className="btn btn-dark">40</button>{" "}
              <button className="btn btn-dark">41</button>{" "}
              <button className="btn btn-dark">42</button>{" "}
              <button className="btn btn-dark">43</button>{" "}
              <button className="btn btn-dark">44</button>{" "}
              <button className="btn btn-dark">45</button>{" "}
              <button className="btn btn-dark">46</button>{" "}
              <button className="btn btn-dark">47</button>
            </div>
            <p className="mt-3">Colorway: </p>
            <button className="btn btn-danger" style={{ width: "30%" }}>
              Red
            </button>{" "}
            <button className="btn btn-light" style={{ width: "30%" }}>
              White
            </button>{" "}
            <button className="btn btn-dark" style={{ width: " 35%" }}>
              Black
            </button>
          </div>
        </div>
        <div className="choices mt-4">
          <button
            className="btn btn-dark"
            onClick={ e => addToCartt(apiData) }
          style={{ width: "400px" }}
          >
          Put it in cart
        </button>{" "}
        <button className="btn btn-dark" style={{ width: "350px" }}>
          Buy Now
        </button>{" "}
        <button className="btn btn-dark" style={{ width: "350px" }}>
          Favourite <i className="bi bi-calendar2-heart-fill"></i>
        </button>
      </div>
      <p className="mt-2">Review: </p>
      <textarea name="" id="" cols="125" rows="10"></textarea>
      <div className="rightsidechose">
        <button type="submit" className="btn btn-secondary">
          <i className="bi bi-send"></i>
        </button>{" "}
        <button className="btn btn-secondary">
          {" "}
          <i className="bi bi-camera"></i>
        </button>{" "}
        <button className="btn btn-secondary">
          <i className="bi bi-emoji-smile"></i>
        </button>
      </div>
    </div>
    </main >
  );
}

export default Detail;
