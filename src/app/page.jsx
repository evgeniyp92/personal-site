import { Pane } from '../components/Pane'; // @ imports stop working suddenly?
import NameCard from '../components/NameCard'; // must be exported default for some reason -- figure out why
// import * as components from '@/components';

export default function Home() {
  return (
    <div className='grid grid-cols-7 grid-rows-5 h-full border-2 border-black'>
      <div className='border-2 border-black col-span-5 row-span-2'>
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
