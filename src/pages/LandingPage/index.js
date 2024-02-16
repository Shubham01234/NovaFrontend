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
import { VIMAGE } from '../../assets/common'
import { Images } from 'assets/Images'
import NftCard from '../../components/NftCard/nftCard.tsx'

export default function LandingPage() {
  return (
    <div className='landing_page'>
        <p className='welcome_text'>
        WELCOME TO ASTRA NOVA’S <br/> 
        IDENTITY AND LOYALTY PROGRAM
        </p>

        <div className='vImages_div'>
            <img src={vImage} alt="vImage" style={{width:"100%"}}/>
            {/* <VIMAGE style={{width:"100%"}}/> */}
        </div>
        <div className='flex items-center justify-around'>
            <div className='flex flex-col items-start gap-8'>
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
                <img src={leftArrow} alt="arrow"/>
                <p>SCROLL TO LEARN MORE</p>
                <img src={rightArrow} alt="arrow"/>
            </div>
        </div>

        <div className='flex items-center justify-center h-[395px]'>
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

            <div className='leading-5 flex flex-col items-end translate-y-[69px]'>
                <div className=''>
                    <p className='text-text-primary uppercase font-bold text-[12px] opacity-[75%] font-inter'>
                        This pass serves as a platform to store and redeem rewards, such as <br/>
                        Shards through task completion and social quests. During the game  <br/>
                        demo stage, you can accumulate Shards to later convert them into <br/>
                        $RVV (Revive Token).
                    </p>
                    <p className='text-text-primary uppercase font-bold text-[12px] opacity-[75%] font-inter translate-y-[52px]'>
                        Think of the Black Pass as a digital profile within Astra Nova, <br/>
                        preserving a player's on-chain achievements indefinitely.<span className='text-text-secondary'> Only Black <br/>
                        Pass holders will have access to claim the upcoming $RVV Airdrop. </span>
                    </p>
                </div>
                    
                    <img src={bottomLIcon} alt="img" className='-translate-y-[2px]'/>
            </div>
        </div>

        <div className='flex flex-col gap-[78px]'>
            <div className='relative w-[110px] h-[16px] ml-[95px] flex text-center'>
                <div className="top left"></div>
                <div className="bottom right"></div>
                <p className='uppercase text-[#FAFAFABF] text-[10px] bg-[#FAFAFA0D] w-[110px]'>step by step</p>
            </div>
            <p className='uppercase font-bold text-[35px] leading-10 text-text-primary ml-[95px]'>how to get the black pass</p>
            <div>
                <img src={Images.HLINE} alt="img" className='w-full'/>

                <div className='flex justify-around -mt-8'>
                    {/* first */}
                    <div className='flex flex-col items-center text-center gap-4'>
                            <div className='w-[63px] h-[63px] border-[0.54px] border-green-300 rounded-full flex items-center justify-center bg-img bg-[#141414]'>
                                <p className='font-bold text-[18px] text-text-primary leading-5'>01</p>
                            </div>
                        
                        <p className='uppercase font-bold text-[18px] text-text-primary leading-5'>Connect a <br/> Hedera Wallet</p>
                        <p className='font-bold text-[12px] text-text-primary leading-5 opacity-[75%]'>If you don’t have one, create it <span className='text-text-secondary'>here.</span></p>
                    </div>
    
                    {/* second */}
                    <div className='flex flex-col items-center text-center gap-4'>
                        <div className='w-[63px] h-[63px] border-[0.54px] border-green-300 rounded-full flex items-center justify-center bg-img bg-[#141414]'>
                            <p className='font-bold text-[18px] text-text-primary leading-5'>02</p>
                        </div>
                        <p className='uppercase font-bold text-[18px] text-text-primary leading-5'>Mint the <br/> Black pass</p>
                        <p className='font-bold text-[12px] text-text-primary leading-5 opacity-[75%]'>
                            Black Pass is a non-transferable Soulbound <br/>
                            Token (SBT) associated with your wallet and <br/>
                            will be forever in your wallet.To ensure a <br/>
                            smooth onboarding experience to the Hedera <br/>
                            Ecosystem, we are gifting you 1 HBAR.
                        </p>
                    </div>
    
                    {/* third */}
                    <div className='flex flex-col items-center text-center gap-4'>
                        <div className='w-[63px] h-[63px] border-[0.54px] border-green-300 rounded-full flex items-center justify-center bg-img bg-[#141414]'>
                            <p className='font-bold text-[18px] text-text-primary leading-5'>03</p>
                        </div>
                        <p className='uppercase font-bold text-[18px] text-text-primary leading-5'>Begin <br/> your journey</p>
                        <p className='font-bold text-[12px] text-text-primary leading-5 opacity-[75%]'>Start participating in the quests and collecting <br/> your rewards.</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='flex flex-col gap-[58px]'>
            <div className='relative w-[110px] h-[16px] ml-[95px] flex text-center'>
                <div className="top left"></div>
                <div className="bottom right"></div>
                <p className='uppercase text-[#FAFAFABF] text-[10px] bg-[#FAFAFA0D] w-[110px]'>THE BENEFITS</p>
            </div>
            <p className='uppercase font-bold text-[35px] leading-10 text-text-primary ml-[95px]'>BENEFITS OF HAVING THE BLACK PASS</p>

            <div className='flex ml-[95px] gap-5'>
                <NftCard/>
                <NftCard/>
                <NftCard/>
                <NftCard/>
            </div>
        </div>

    </div>
  )
}
