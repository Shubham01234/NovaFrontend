import React from 'react'
import './landingPahe.css'
import vImage from '../../assets/resources/Line.svg'
import card from '../../assets/resources/Card.svg'
import MainButton from '../../components/MainButton'
import leftArrow from '../../assets/resources/leftArrow.svg'
import rightArrow from '../../assets/resources/rightArrow.svg'
import leftGlowArrow from '../../assets/resources/leftGlowArror.svg'
import lIcon from '../../assets/resources/lImage.svg'
import bottomLIcon from '../../assets/resources/bottimCurve.svg'

export default function LandingPage() {
  return (
    <div className='landing_page'>
        <p className='welcome_text'>
        WELCOME TO ASTRA NOVA’S <br/> 
        IDENTITY AND LOYALTY PROGRAM
        </p>

        <div className='vImages_div'>
            <img src={vImage} alt="vImage" style={{width:"100%"}}/>
        </div>
        <div className='flex items-center justify-around'>
            <div className='flex flex-col items-start	 gap-8'>
                <p className='text-text-primary opacity-[75%] font-bold text-[12px] leading-5'>
                    <span className='text-text-secondary'>The Black Pass</span> is a free platform that <br/>
                        gathers all your information within the <br/> 
                        Astra Nova RPG universe.
                </p>
                <MainButton text="claim yours" className="align-start"/>
            </div>

            <div>
                <img src={card} alt="card" className='m-auto -translate-y-[137px]'/>
            </div>

            <div className='text-text-primary flex font-bold text-[10px] opacity-[75%]'>
                <img src={leftArrow} alt="arrow" className='hover:fill-[#1cf9cf]' style={{ fill: '#000' }}/>
                <p>SCROLL TO LEARN MORE</p>
                <img src={rightArrow} alt="arrow"/>
            </div>
        </div>

        <div className='flex items-center justify-center'>
            <div className='leading-10'>
                <div className='flex items-center'>
                    <img src={leftGlowArrow} alt="img" className='w-[22px] h-[17px]'/>
                    <p className='text-text-primary uppercase font-bold text-[35px]'>
                        Complete multiple quests
                    </p>
                </div>
                <p className='text-text-primary uppercase font-bold text-[35px]'>
                    and collect as many shards as <br/>
                    you can.
                </p>
                <img src={lIcon} alt="img"/>
            </div>

            <div className='leading-10 flex flex-col items-center'>
                <div className='translate-y-[75px]'>
                    <p className='text-text-primary uppercase font-bold text-[12px] opacity-[75%] font-inter'>
                        This pass serves as a platform to store and redeem rewards, such as <br/>
                        Shards through task completion and social quests. During the game  <br/>
                        demo stage, you can accumulate Shards to later convert them into <br/>
                        $RVV (Revive Token).
                    </p>
                    <p className='text-text-primary uppercase font-bold text-[12px] opacity-[75%] font-inter'>
                        Think of the Black Pass as a digital profile within Astra Nova, <br/>
                        preserving a player's on-chain achievements indefinitely.<span className='text-text-secondary'> Only Black <br/>
                        Pass holders will have access to claim the upcoming $RVV Airdrop. </span>
                    </p>
                </div>
                    
                    <img src={bottomLIcon} alt="img" className='-translate-y-[2px]'/>
            </div>
        </div>

    </div>
  )
}
