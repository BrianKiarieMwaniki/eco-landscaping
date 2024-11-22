import Image from "next/image";
import Link from "next/link";
import heroImg from '@/public/images/hero.png';

import installationImg from '@/public/images/installation.png';
import maintenanceImg from '@/public/images/maintenance.png';
import hardscapingImg from '@/public/images/hardscaping.png'
import irrigationImg from '@/public/images/irrigation.png'

import irrigationIcon from '@/public/icons/irrigation.svg'
import Card from "./components/ui/Card";

export default function Home() {
  const services = [
    {
      title: 'Installation',
      icon: '/icons/sprite.svg#landscape',
      info: 'Unleash the beauty of nature with our creative garden design installation solutions.',
      img: installationImg
    },
    {
      title: 'Maintenance',
      icon: '/icons/sprite.svg#plant',
      info: 'Keep your lawn lush and vibrant with our expert maintenance services.',
      img: maintenanceImg
    },
    {
      title: 'Hardscape',
      icon: '/icons/sprite.svg#hardscaping',
      info: 'Elevate your outdoor living spaces with stunning hardscape installations',
      img: hardscapingImg
    },
    {
      title: 'Irrigation',
      icon: '/icons/sprite.svg#irrigation',
      info: 'Ensure your landscape stays green and healthy with efficient irrigation solutions',
      img: irrigationImg
    }
  ]

  return (
    <main className='py-24'>
      <section
        className='container mx-auto flex flex-col items-center'
      >
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
      <section  className='container mx-auto mt-12'>
        <div className='flex w-full flex-col items-center'>
          <div className='flex w-[80%] flex-col text-center px-4'>
            <h6 className='small-heading'>WHAT WE DO</h6>
            <h1 className='extralarge-heading'>
              Get more value from our landscaper
            </h1>
            <p className='txt md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto'>
              Our technicians use state-of-the-art equipment and eco-friendly
              products to keep your lawn healthy and creating stunning and
              functional landscapes.
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-center items-stretch gap-4  mt-10">
            {services.map((service, i) => (
              <div key={i} className="max-w-[85%] sm:max-w-[260px] min-w-[260px]">
                <Card {...service}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
