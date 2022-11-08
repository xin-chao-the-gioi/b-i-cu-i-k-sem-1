import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.css'
import {FiFacebook, FiInstagram} from 'react-icons/fi'
import {TbBrandTelegram} from 'react-icons/tb'

let cx = classNames.bind(styles)

function Footer() {
    return (
        <>
            <div className="container-fluid px-5">
                <div className="row text-left">
                    <div className="col-md-3 font-weight-bold text-white">
                        <h3>FIND A STORE</h3>
                        <h3>BECOME A MEMBER</h3>
                        <h3>SINGUP FOR EMAIL</h3>
                        <h3>SEND US FEEDBACK</h3>
                    </div>
                    <div className="col-md-3">
                        <p className="h3 font-weight-bold text-white">
                            GET HELP
                        </p>
                        <p className={cx('fo-text')}>Order Status</p>
                        <p className={cx('fo-text')}>Delivery</p>
                        <p className={cx('fo-text')}>Return</p>
                        <p className={cx('fo-text')}>Payment Option</p>
                        <p className={cx('fo-text')} href="./Contact.html">Contact</p>
                    </div>
                    <div className="col-md-3">
                        <p className="h3 font-weight-bold text-white">
                            ABOUT NIKE
                        </p>
                        <p className={cx('fo-text')}>News</p>
                        <p className={cx('fo-text')}>Careers</p>
                        <p className={cx('fo-text')}>Investor</p>
                        <p className={cx('fo-text')}>Sustainability</p>
                    </div>
                    <div className="col-md-3">
                        <p className='h3 font-weight-bold text-uppercase text-white'>Contact us</p>
                        <p className={cx('fo-icon')}><FiFacebook /></p>
                        <p className={cx('fo-icon')}><FiInstagram /></p>
                        <p className={cx('fo-icon')}><TbBrandTelegram /></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer