import Link from 'next/link';

export function Pane({ children, whereTo, turnLeft, turnRight, newWindow }) {
  return (
    <div className='text-black w-full h-full flex justify-center items-center flex-col'>
      <h2 className={turnLeft ? '-rotate-90' : turnRight ? 'rotate-90' : ''}>
        <Link
          target={newWindow && '_blank'}
          href={whereTo ?? '/'}
          className={`text-4xl lg:text-6xl font-light uppercase tracking-widest${
            turnLeft ? ' -rotate-90' : ''
          } ${turnRight ? 'rotate-90' : ''}`}>
          {children}
        </Link>
      </h2>
    </div>
  );
}
