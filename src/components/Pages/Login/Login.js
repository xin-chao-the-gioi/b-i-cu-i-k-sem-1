import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getUsers } from '../../../services/user.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { saveUserToLocalStorage } from '../../../redux/action/UserAction';
import style from './Login.module.css';
import Swal from 'sweetalert2';

let cx = classNames.bind(style)

const initValues = {
  email: "",
  password: ""
}

const validate = Yup.object().shape({
  email: Yup.string().required("Please Enter Email").email("Email is not in the correct format"),
  password: Yup.string().required("Please Enter Password")
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validate,
    onSubmit: async data => {
      let response = await getUsers();
      let users = response.data;
      let findUser = users.filter(u => {
        return data.email === u.email && data.password === u.password;
      });
      
      let user = findUser[0];
      if (user) {
        dispatch(saveUserToLocalStorage(user));
        navigate("/");
      } else {

        Toast.fire({
          icon: "error",
          title: "Your Email & Password Is Incorrect",
        })

      }
    }
  })

  return (
    <div className={cx("container","py-3")}>
      <form onSubmit={formik.handleSubmit}>
        <h3 className='text-center text-uppercase font-weight-bold'>Login</h3>
        <span className={cx("err")}>
          {error}
        </span>
        <div className={cx('mt-3')}>
          <label className="mb-0 mr-2 font-weight-bold d-block">
            Email
          </label>
          <input
            name="email"
            className={cx("form-control", "form-input", "mt-2")}
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <span className={cx("err")}>
          {formik.errors.email ? formik.errors.email : ""}
        </span>
        <div className={cx("mb-2", "mt-4")}>
          <label className="mb-0 mr-2 font-weight-bold d-block">
            Password
          </label>
          <input
            name="password" type="password"
            className={cx("form-control", "form-input", "mt-2")}
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <p className={cx("err")}>
          {formik.errors.password ? formik.errors.password : ""}
        </p>
        <button
          type="submit"
          className={cx("btn", "text-uppercase", "btn-outline-dark", "mb-4", "mt-2", "btn-block")}
        >
          Sign-In
        </button>
        <p>No account? <Link to={"/register"}>Press Here To Sign-Up!</Link></p>
      </form>
    </div>

  )
}

export default Login