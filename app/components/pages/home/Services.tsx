'use client'

import { services } from '@/lib/services'
import Card from '../../ui/Card'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse'
        }
      });


      timeline.from('#heading',{
        y:-150,
        opacity:0,
        duration: 0.5,
        ease:'power2.out'
      })

      timeline.from('#info',{
        y:140,
        opacity:0,
        duration:0.5,
        ease:'power2.in',
        delay:0.4
      })

      timeline.from('.stagger-box', {
        transform: 'translate(-100vw)',
        repeat: 0,
        opacity: 0,
        yoyo: false,
        duration: 2,
        stagger: {
          each: 0.4
        },
        delay: 0.4
      })      
    },
    { scope: containerRef }
  )
  return (
    <section  ref={containerRef} className='container mx-auto mt-12'>
      <div className='flex w-full flex-col items-center'>
        <div className='flex w-[80%] flex-col px-4 text-center'>
          <h6 className='small-heading'>WHAT WE DO</h6>
          <h1 className='extralarge-heading' id='heading'>
            Get more value from our landscaper
          </h1>
          <p id='info' className='txt mx-auto md:w-[75%] lg:w-[65%] xl:w-[55%]'>
            Our technicians use state-of-the-art equipment and eco-friendly
            products to keep your lawn healthy and creating stunning and
            functional landscapes.
          </p>
        </div>

        <div
         
          className='mt-10 flex flex-row flex-wrap items-stretch justify-center gap-4'
        >
          {services.map((service, i) => (
            <div
              key={i}
              className='stagger-box min-w-[260px] max-w-[85%] sm:max-w-[260px]'
            >
              <Card {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
