import { Pane } from '@/components/Pane';
// import * as components from '@/components';

// TODO: The page currently naively assumes the user is on desktop with no
// mobile fallback. Either write js to swap between presenting a mobile and
// desktop interface or write proper media queries/tailwind breakpoints

// const desktopOrMobile = () => {
//   const [deviceType, setDeviceType] = useState("desktop");

//   useEffect(() => {
//     const handleResize = () => {
//       setDeviceType(window.innerWidth > 768 ? "desktop" : "mobile");
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return deviceType;
// };

const Namecard = () => {
  return (
    <div className='bg-lime-400 text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-6xl font-bold uppercase tracking-wide'>
        Evgeniy Pimenov
      </h1>
      <h2 className='text-2xl font-bold uppercase tracking-widest'>
        Full-Stack Developer
      </h2>
    </div>
  );
};

const Work = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-light uppercase tracking-widest'>Work</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-light uppercase tracking-widest'>Connect</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-light uppercase tracking-widest -rotate-90'>
        About
      </h1>
    </div>
  );
};

const Github = () => {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-light uppercase tracking-widest rotate-90'>
        Github
      </h1>
    </div>
  );
};

export default function Home() {
  return (
    <div className='grid grid-cols-7 grid-rows-5 h-full border-2 border-black'>
      <div className='border-2 border-black col-span-5 row-span-2'>
        {/* <Work /> */}
        {/* <components.Pane>Work</components.Pane> */}
        <Pane whereTo={'/projects'}>Work</Pane>
      </div>
      <div className='border-2 border-black col-span-2 row-span-4'>
        <Pane
          whereTo={'https://github.com/evgeniyp92'}
          newWindow
          turnRight>
          Github
        </Pane>
      </div>
      <div className='border-2 border-black col-span-2 row-span-3'>
        <Pane
          whereTo='/about'
          turnLeft>
          About
        </Pane>
      </div>
      <div className='border-2 border-black col-span-3 row-span-2'>
        <Namecard />
      </div>
      <div className='border-2 border-black col-span-5'>
        <Pane whereTo='mailto:contact@evgeniypimenov.com?subject=Contact Request'>
          Contact
        </Pane>
      </div>
    </div>
  );
}
