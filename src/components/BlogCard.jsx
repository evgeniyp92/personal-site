import Link from 'next/link';
export default function BlogCard(props) {
  return (
    <Link href={props.href}>
      <div className='flex w-3/4 items-center border-4 border-black bg-lime-400 p-8'>
        <div className='flex w-full flex-col justify-center gap-10'>
          <h2 className='w-full text-2xl font-semibold'>{props.title}</h2>
          <div className=''>{props.dateString}</div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-12 w-12'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </div>
    </Link>
  );
}
