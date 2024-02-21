import { Pane } from '../components/Pane'; // @ imports stop working suddenly?
import NameCard from '../components/NameCard'; // must be exported default for some reason -- figure out why
// import * as components from '@/components';

// TODO: The page currently naively assumes the user is on desktop with no
// mobile fallback. Either write js to swap between presenting a mobile and
// desktop interface or write proper media queries/tailwind breakpoints

// Sample implementation to monitor on user's device (expensive, bad, forces page onto client-side rendering)
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
        <NameCard />
      </div>
      <div className='border-2 border-black col-span-5'>
        <Pane whereTo='mailto:contact@evgeniypimenov.com?subject=Contact Request'>
          Contact
        </Pane>
      </div>
    </div>
  );
}
