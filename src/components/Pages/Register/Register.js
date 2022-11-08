import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './Register.module.css';
import classNames from 'classnames/bind';
import { register } from "../../../services/user.service"
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(style);

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: ""
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please Enter Name"),
    email: Yup.string().required("Please Enter Email").email("Incorrect Email Format"),
    password: Yup.string().required("Please Enter Password").min(6, "Password need to be minimum of 6 characters"),
    confirm: Yup.string().required("Please Re-enter Your Password").min(6, "Password need to be minimum of 6 characters")
})

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (user) => {
            let response = await register(user);
            response.status === 201 && navigate("/login");
        }
    });

    return (
        <div className={cx("container","py-3")}>
            <form onSubmit={formik.handleSubmit} className={cx('form-submit', 'from')}>
                <h3 className='text-center text-uppercase font-weight-bold'>Register</h3>
                <div className={cx("mt-3")}>
                    <label className="mb-0 mr-2 font-weight-bold">
                        Full Name
                    </label>
                    <input
                        name="name" type="text" placeholder='Your Name'
                        className={cx("form-control", "form-input", "mt-2")}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <span className={cx("err")}>
                    {formik.errors.name ? formik.errors.name : ""}
                </span>

                <div className={cx('mt-3')}>
                    <label className="mb-0 mr-2 font-weight-bold d-block">
                        Email
                    </label>
                    <input
                        name="email" type="email "
                        className={cx("form-control", "form-input", "mt-2")}
                        onChange={formik.handleChange} placeholder="Email"
                        value={formik.values.email}
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
                        onChange={formik.handleChange} placeholder="Password"
                        value={formik.values.password}
                    />
                </div>
                <p className={cx("err")}>
                    {formik.errors.password ? formik.errors.password : ""}
                </p>

                <div className={cx("mb-2", "mt-4")}>
                    <label className="mb-0 mr-2 font-weight-bold d-block">
                        Re-enter Password
                    </label>
                    <input
                        name="confirm" type="password"
                        className={cx("form-control", "form-input", "mt-2")}
                        onChange={formik.handleChange} placeholder="Nhập lại mật khẩu"
                        value={formik.values.confirm}
                    />
                </div>
                <p className={cx("err")}>
                    {formik.errors.confirm ? formik.errors.confirm : ""}
                </p>
                <button
                    type="submit"
                    className={cx("btn", "text-uppercase", "btn-outline-dark", "mb-3", "mt-4", 'btn-block')}
                >
                    Sign-Up
                </button>
                <div className={cx('text-center', 'mb-3')}>
                    <span>You Have An Existing Account?. </span>
                    <Link to={"/login"} className='text-danger text-decoration-none'>Login Now!</Link>
                </div>
            </form>
        </div>
    )
}

export default Register