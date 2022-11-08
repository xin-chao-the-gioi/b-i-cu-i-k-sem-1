import React from 'react'
import classNames from 'classnames/bind'
import styles from "./Contact.module.css"
import logo1 from '../../img/contact.bmp'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'
import logo2 from '../../img/logo1.png'



let cx = classNames.bind(styles)

function Contact() {
  return (
    <div className='container py-3' >
      <h1>We Are Available 24/7 with our support team helping you </h1>
      <div className="container-fluid px-5 pt-5">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <img src={logo2} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6">
                    <p className="h3 text-uppercase font-weight-bold text-center">nike<small></small>&nbsp;</p>
                    <div className="contact-info my-2">
                        <div className="location d-flex align-items-center my-1">
                            <span className={cx('icon-contact')}><GoLocation /></span>
                            <span className="ml-3 text-capitalize">250, hoàng quốc việt, cổ nhuế, cầu giấy, hà nội</span>
                        </div>
                 
                        <div className="mail d-flex align-items-center my-1">
                            <span className={cx('icon-contact')}><AiOutlineMail/></span>
                            <span className="ml-3">loczngo@gmail.com</span>
                        </div>
                        <div className="fb d-flex align-items-center my-1">
                          
                        </div>
                    </div>
                    <p className="h3 text-uppercase font-weight-bold text-center">liên hệ với chúng tôi</p>
                    <div className="contact-form my-2">
                        <div className="row justify-content-between align-items-center mb-4 pb-2">
                            <input type="text" className={cx("ip-name")} placeholder="Họ và tên"/>
                            <input type="text" className={cx("ip-phone")} placeholder="Số điện thoại"/>
                        </div>
                        <div className="row justify-content-between align-items-center mb-4 pb-2">
                            <input type="text" className={cx("ip-mail")} placeholder="Địa chỉ email"/>
                        </div>
                        <div className="row justify-content-between align-items-center mb-4 pb-2">
                            <textarea type="text" className={cx("ip-mess")} rows="3" placeholder="Lời nhắn"></textarea>
                        </div>
                        <div className="row justify-content-center align-items-center"><a href="#"
                                className={cx("btn", "btn-contact",)}>Gửi</a></div>
                    </div>

                </div>
            </div>
        </div>
      
     <img src={logo1}></img>
    </div>
    
  )
}

export default Contact