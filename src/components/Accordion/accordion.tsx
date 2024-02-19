import React, { useState } from 'react';
import { Images } from '../../assets/Images';

function Accordion() {
    const sectionsData = [
        {
            title: 'What is the Black Pass?',
            content: 'Astra Nova is a global Web3 Gaming company focused on creating lasting community value for avid gamers and NFT enthusiasts. We’re building a true MetaRPG gaming experience, based on the core Web3 principle of blockchained-powered interoperability & transparency.'
        },
        {
            title: 'What is $RVV and when will it be launched?',
            content: 'Astra Nova is a global Web3 Gaming company focused on creating lasting community value for avid gamers and NFT enthusiasts. We’re building a true MetaRPG gaming experience, based on the core Web3 principle of blockchained-powered interoperability & transparency.'
        },
        {
            title: 'What are Shards and how can I collect them?',
            content: 'Astra Nova is a global Web3 Gaming company focused on creating lasting community value for avid gamers and NFT enthusiasts. We’re building a true MetaRPG gaming experience, based on the core Web3 principle of blockchained-powered interoperability & transparency.'
        },
        {
            title: 'How do I claim the shards? ',
            content: 'Astra Nova is a global Web3 Gaming company focused on creating lasting community value for avid gamers and NFT enthusiasts. We’re building a true MetaRPG gaming experience, based on the core Web3 principle of blockchained-powered interoperability & transparency.'
        },
        {
            title: 'What is Astra Nova?',
            content: 'Astra Nova is a global Web3 Gaming company focused on creating lasting community value for avid gamers and NFT enthusiasts. We’re building a true MetaRPG gaming experience, based on the core Web3 principle of blockchained-powered interoperability & transparency.'
        },
    ];

    const [openSections, setOpenSections] = useState(Array(sectionsData.length).fill(false));

    const handleOpenSection = (index: any) => {
        const newOpenSections = [...openSections];
        newOpenSections[index] = !newOpenSections[index];
        setOpenSections(newOpenSections);
    };

    return (
        <div className=' xl:w-[1116px] w-auto mr-[40px] m-auto ml-[40px] md:[40px] lg:ml-[162px] '>
            {sectionsData.map((section, index) => (
                <div key={index} className='flex flex-col gap-[10px]' style={{ borderTop: "0.75px dashed rgb(250, 250, 250, 0.4)", borderBottom:index - 1 ? "0.75px dashed rgb(250, 250, 250, 0.4)" : "" }}>
                    <div className={`flex items-center justify-between mt-5 ${openSections[index] ? "mb-1" : "mb-5"} `}
                        onClick={() => handleOpenSection(index)}>
                        <div className='flex items-center gap-2'>
                            <img src={openSections[index] ? Images.ACCORDIAN_GARROW : Images.ACCORDIAN_ARROW } alt="arrow" className='w-[14px] h-[14px]' />
                            <p className='font-bold text-[12px] sm:text-[14px] md:text-[18px] text-text-primary opacity-[75%] uppercase'>
                                {section.title}
                            </p>
                        </div>
                            <img src={ openSections[index] ? Images.SUB : Images.ADD} alt="subtract" className={` w-[16px] md:w-[22px] ${openSections[index] ? "h-[2px]" : "w-[16px] md:h-[22px]" } cursor-pointer`} />
                    </div>
                    {openSections[index] &&
                        <p className='text-[12px] text-text-primary opacity-[75%] w-auto md:w-[523px] mb-5 font-sans'>
                            {section.content}
                        </p>
                    }
                </div>
            ))}
        </div>
    );
}

export default Accordion;
