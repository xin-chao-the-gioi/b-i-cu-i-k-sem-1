import React from 'react'
import classNames from 'classnames/bind'
import styles from "./About.module.css"
import logo1 from '../../img/nike-logo.png'
import logo from '../../img/0_LJ4Aq45zmj8yf8UD.png'

let cx = classNames.bind(styles)

function About() {
  return (
    <div className='container'>
      <div className="row align-items-center">
        <div className="col-lg-4"><img src={logo1} className='img-fluid' /></div>
        <div className="col-lg-8"><img src={logo} className='img-fluid' /></div>
      </div>



    </div>
  )
}

export default About