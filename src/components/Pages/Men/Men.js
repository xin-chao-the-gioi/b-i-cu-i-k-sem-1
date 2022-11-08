import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Men() {
  const url = "http://localhost:9090/product";
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}?category_id=1`)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="text-center">
        <h1>All Products Of: Man</h1>
      </div>

      <div className="container">
        <div className="row">
          {apiData.map((item, index) => {
            return (
              <div className="col-lg-3 item mt-3" key={index}>
                <Link to={`/detail/${item.id}`}>
                  <div className="card">
                    <img className="card-img-top" src={item.img} alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{item.name}</h5>
                      <p className="card-text text-danger">{item.price}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Men;
