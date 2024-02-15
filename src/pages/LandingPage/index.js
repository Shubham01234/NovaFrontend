import React from 'react'
import './landingPahe.css'
import Header from '../../components/Header/header'
import vImage from '../../assets/resources/Line.svg'
import card from '../../assets/resources/Card.svg'
import MainButton from '../../components/MainButton'

export default function LandingPage() {
  return (
    <div className='landing_page'>
        {/* <Header /> */}
        <p className='welcome_text'>
        WELCOME TO ASTRA NOVA’S <br/> 
        IDENTITY AND LOYALTY PROGRAM
        </p>
        <div className='vImages_div'>
            <img src={vImage} alt="vImage" style={{width:"100%"}}/>
            <div>
                <img src={card} alt="card" />
            </div>
        </div>
        <div>
            <p>
                <span>The Black Pass</span> is a free platform that gathers all your information within the Astra Nova RPG universe.
            </p>
            <MainButton text="claim yours"/>
        </div>
    </div>
  )
}
