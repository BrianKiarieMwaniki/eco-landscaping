import heroImg from '@/public/images/hero.png'
import Image from 'next/image'
import Link from 'next/link'


import Services from './components/pages/home/Services'
import ChooseUs from './components/pages/home/ChooseUs'

export default function Home() {
  return (
    <main className='py-24'>
      <section className='container mx-auto flex flex-col items-center'>
        <Image src='/images/bagdes.png' width={67} height={69} alt='badge' />
        <div className='flex flex-col pt-0 text-center md:px-24'>
          <h1 className='txt-primary text-center'>
            Best Landscape <br /> Design & Maintenance
          </h1>
          <p className='txt mx-auto mt-4 w-[95%] text-center leading-[1.5] md:w-[75%]'>
            We are proud to be a responsible and sustainable lawn care company,
            dedicated to preserving the environment and the health of your lawn
          </p>
          <Link href='#' className='btn-primary btn-animated btn mx-auto mt-8'>
            Make an Appointment
          </Link>
        </div>
        <Image
          src={heroImg}
          alt='backyard'
          className='mt-[50px] rounded-[50px] p-2'
        />
      </section>
      <Services/>
      <ChooseUs/>
    </main>
  )
}
