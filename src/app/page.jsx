const React = require("react");
import Link from "next/link";

const Namecard = () => {
  return (
    <div className='bg-lime-400 text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-6xl font-bold uppercase tracking-wide'>Evgeniy Pimenov</h1>
      <h2 className='text-2xl font-bold uppercase tracking-widest'>Full-Stack Developer</h2>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold uppercase tracking-widest'>Projects</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold uppercase tracking-widest'>Contact</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold uppercase tracking-widest -rotate-90'>About</h1>
    </div>
  );
};

const Github = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold uppercase tracking-widest rotate-90'>Github</h1>
    </div>
  );
};

export default function Home() {
  return (
    <div className='w-screen h-screen p-8'>
      <div className='grid grid-cols-7 grid-rows-5 h-full border-2 border-black'>
        <div className='border-2 border-black col-span-5 row-span-2'>
          <Projects />
        </div>
        <div className='border-2 border-black col-span-2 row-span-4'>
          <Github />
        </div>
        <div className='border-2 border-black col-span-2 row-span-3'>
          <About />
        </div>
        <div className='border-2 border-black col-span-3 row-span-2'>
          <Namecard />
        </div>
        <div className='border-2 border-black col-span-5'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
