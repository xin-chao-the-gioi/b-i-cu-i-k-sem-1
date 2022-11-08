import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./cart.module.css"

const cx = classNames.bind(style)
function Cart() {
  const [data, setData] = useState([]);
  const [rend, setRend] = useState(true);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('cart')))
  }, [rend]);
  const delFromCart = (id) => {
    var find = data.findIndex((item) => item.id === id);
    data.splice(find, 1);
    localStorage.setItem("cart", JSON.stringify(data));
    setRend(!rend)
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>Price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td className={cx("wch")}>
                  <img src={item.img} className={cx("imgg")} />
                </td>
                <td className={cx("xcv")}>{item.name}</td>
                <td className={cx("xcv")}>{item.price}</td>
                <td className={cx("xcv")}><button onClick={(e) => delFromCart(item.id)}>x</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
