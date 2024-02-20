import React from 'react'
import astroLogo from '../../assets/resources/astroLogo.svg'
import './header.css'

export default function Header() {
  return (
    <div className="header_div flex items-center justify-between bg-[#181818] py-3 px-5 md:px-[80px]">
     <div>
        <img src={astroLogo} alt="logo" className="w-6" />
     </div>
    <p className="center_txt font-bold text-[10px] text-text-primary">BLACKPASS - ASTRA NOVA</p>
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
