'use client'

import chooseUsImg from '@/public/images/choose-us.png'
import Image from 'next/image'

const ChooseUs = () => {
  return (
    <section className='container mx-auto mt-12'>
      <div className='mx-auto flex flex-row gap-16 border border-red-600 lg:w-[80%]'>
        <div className='flex w-1/3 items-center'>
          <Image src={chooseUsImg} alt='garden' className='left-skew' />
        </div>
        <div className='flex w-2/3 flex-col items-start justify-start px-4'>
          <h6 className='small-heading'>WHY CHOOSE US</h6>
          <h1 className='extralarge-heading mb-4' id='heading'>
            Take the hassle out of garden maintenance
          </h1>
          <p id='info' className='txt mx-auto'>
            We assist homeowners in saving time and effort by designing and
            upkeeping landscapes, lawns, and outdoor living areas that garner
            admiration. Our team comprises skilled maintenance professionals
            certified well-versed in effective landscape upkeep services to
            ensure the year-round health of your property.
          </p>

          <ul className='flex list-none flex-col'>
            <li>
              <svg className='h-[32px] w-[32px]'>
                <use xlinkHref='/icons/sprite.svg#trophy' />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
