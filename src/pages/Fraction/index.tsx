import { Images } from 'assets/Images'
import { HeroSection } from 'components/Molecules/HeroSection'
import React, { useState } from 'react'

function Fraction() {
    const [fraction, setFraction] = useState("");

    const handleFraction = (type : any) => {
        if(type === "COMBAT") {
            setFraction("COMBAT");
        } else if (type === "DIPLOMACY") {
            setFraction("DIPLOMACY");
        } else if (type === "CRAFTING"){
            setFraction("CRAFTING")
        }else if (type === "EXPLORATION") {
            setFraction("EXPLORATION")
        } 
    }

  return (
    <div>
        <HeroSection bgSrc={fraction === "COMBAT" ? 
            Images.COMBAT_BG : 
            fraction === "DIPLOMACY" ? 
            Images.DIPLOMACY_BG : 
            fraction === "CRAFTING" ? 
            Images.CRAFTING_BG : 
            fraction === "EXPLORATION" 
            ? Images.EXPLORATION_BG : 
            Images.COMBAT_BG
            } items={"end"}
        >
            <div>
                <p className='text-text-primary font-bold text-[18px] text-center'>CHOOSE YOUR FACTION</p>
                <div className='flex gap-[32px] mt-6 pb-9'>
                    <div className='flex flex-col items-center gap-[21px] cursor-pointer hover:text-text-secondary' onClick={() => { handleFraction("COMBAT")}}>
                        <div className={`w-[63px] h-[63px] flex items-center justify-center ${ fraction === "COMBAT" && 'border-[0.54px] border-green-300 rounded-full bg-img bg-[#141414]'}`}>
                            <img src={Images.COMBAT} alt="COMBAT" className='w-[44px] h-[44px]'/>
                        </div>
                        <p className={`${ fraction === "COMBAT" ? 'text-text-secondary ' : 'text-text-primary'} font-bold text-[8px]`}>COMBAT</p>
                    </div>

                    <div className='flex flex-col items-center gap-[21px] cursor-pointer hover:text-text-secondary' onClick={() => { handleFraction("DIPLOMACY")}}>
                        <div className={`w-[63px] h-[63px] flex items-center justify-center ${ fraction === "DIPLOMACY" && 'border-[0.54px] border-green-300 rounded-full bg-img bg-[#141414]'}`}>
                            <img src={Images.DIPLOMACY} alt="DIPLOMACY" className='w-[44px] h-[44px]'/>
                        </div>
                        <p className={`${ fraction === "DIPLOMACY" ? 'text-text-secondary ' : 'text-text-primary'} font-bold text-[8px]`}>DIPLOMACY</p>
                    </div>

                    <div className='flex flex-col items-center gap-[21px] cursor-pointer hover:text-text-secondary' onClick={() => { handleFraction("CRAFTING")}}>
                        <div className={`w-[63px] h-[63px] flex items-center justify-center ${ fraction === "CRAFTING" && 'border-[0.54px] border-green-300 rounded-full bg-img bg-[#141414]'}`}>
                            <img src={Images.CRAFTING} alt="CRAFTING" className='w-[44px] h-[44px]'/>
                        </div>
                        <p className={`${fraction === "CRAFTING" ? 'text-text-secondary ' : 'text-text-primary'} font-bold text-[8px]`}>CRAFTING</p>
                    </div>

                    <div className='flex flex-col items-center gap-[21px] cursor-pointer hover:text-text-secondary' onClick={() => { handleFraction("EXPLORATION")}}>
                        <div className={`w-[63px] h-[63px] flex items-center justify-center ${ fraction === "EXPLORATION" && 'border-[0.54px] border-green-300 rounded-full bg-img bg-[#141414]'}`}>
                            <img src={Images.EXPLORATION} alt="EXPLORATION" className='w-[44px] h-[44px]'/>
                        </div>
                        <p className={`${fraction === "EXPLORATION" ? 'text-text-secondary ' : 'text-text-primary'} font-bold text-[8px]`}>EXPLORATION</p>
                    </div>
                </div>
            </div>
        </HeroSection>
    </div>
  )
}

export default Fraction