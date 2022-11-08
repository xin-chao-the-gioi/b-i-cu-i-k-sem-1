import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Productlist() {
  const url = "http://localhost:9090/product";
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}`)
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
        <h1>All Products </h1>
      </div>

      <div className="container">
        <div className="row">
          {apiData.map((item, index) => {
            return (
              <div class="col-lg-3 item mt-3">
                <Link to={`/detail/${item.id}`}>
                  <div class="card">
                    <img class="card-img-top" src={item.img} alt="Card cap" />
                    <div class="card-body">
                      <h5 class="card-title text-dark">{item.name}</h5>
                      <p class="card-text text-danger">{item.price}</p>
                      <p class="card-text">
                        <small class="text-muted">
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
export default Productlist