'use client'

import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props{
    title:string;
    icon: string;
    info:string;
    img: StaticImageData;
}
const Card = ({title, icon, info, img}:Props) => {
  return (
    <div className='relative'>
      <div className='absolute right-3 top-2 z-10 inline-flex  items-center justify-center '>     
        <svg className="h-[40px] w-[40px]">
          <use xlinkHref={icon} />
        </svg>
      </div>
      <div className='card'>
        <div className='flex flex-row justify-between'>
          <h3 className='medium-heading'>{title}</h3>
        </div>
        <p className='txt my-[30px]'>{info}</p>
        <Image src={img} alt={title} className='mt-auto rounded-[8px]' />
      </div>
    </div>
  )
}

export default Card