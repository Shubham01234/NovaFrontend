import React from 'react'
import astroLogo from '../../assets/resources/astroLogo.svg'
import './header.css'

export default function Header() {
  return (
    <div className="header_div">
     <div style={{width:"12%"}}>
        <img src={astroLogo} alt="logo" className="astro_icon" />
     </div>
    <p className="center_txt">BLACKPASS - ASTRA NOVA</p>
    <div className="wallet_div center">
      <p className="center_txt">CONNECT WALLET</p>
      <div className="outer_circle center">
        <div className="inner_circle center">
          <div className="center_circle"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
