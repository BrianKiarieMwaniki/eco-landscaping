import Image from "next/image";
import Link from "next/link";
import heroImg from '@/public/images/hero.png';

export default function Home() {
  return (
    <main className="py-24 ">
      <section
        role="hero"
        className="flex flex-col items-center container mx-auto"
      >
        <Image src="/images/bagdes.png" width={67} height={69} alt="badge" />
        <div className="text-center md:px-24 pt-0 flex flex-col ">
          <h1 className="extralarge-heading text-center">
            Best Landscape <br /> Design & Maintenance
          </h1>
          <p className="txt w-[95%] md:w-[75%] text-center mx-auto leading-[1.5] mt-4">
            We are proud to be a responsible and sustainable lawn care company,
            dedicated to preserving the environment and the health of your lawn
          </p>
          <Link
            href="#"
            className="btn-primary mt-8 mx-auto btn-animated btn"
          >
            Make an Appointment
          </Link>
        </div>
        <Image
          src={heroImg}
          alt="backyard"
          className="rounded-[50px] mt-[50px] p-2"
        />
      </section>
      <section role="what-we-do" className="container mx-auto">

      </section>
    </main>
  );
}
