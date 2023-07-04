import React from 'react'
import Buttons from './Buttons'
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";

import {ReactComponent as Twitter} from "../assets/twitter.svg"
import {ReactComponent as Fb} from "../assets/fb.svg"


export default function Footer() {
  return (
    <>
    <div>
        <div className='aboveFooter'>
                <h1>
                    Download the app now
                </h1>
                <p>
                Available on your favorite store. Start your premium experience now
                </p>
                <Buttons></Buttons>
        </div>

        <div className='footer'>
            <img src={logo} alt="" />
            <div className='socialmedia'>
            <img src={instagram} alt="" />
            <Twitter/>
            <Fb/>
            </div>
            <p>Copyright © 2020 Bella Olonje</p>

        </div>
    </div>
    </>
  )
}
