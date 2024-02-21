import Link from 'next/link';

const projects = [
  { name: 'Lost Horizon', slug: 'lost-horizon' },
  { name: 'Equilibrium', slug: 'equilibrium' },
  { name: 'Crimson Tide', slug: 'crimson-tide' },
  { name: 'Fahrenheit 451', slug: 'f451' },
  { name: 'QA Toolkit', slug: 'qa-toolkit' },
];

export default function ProjectsDirectory() {
  return (
    <div>
      <warning className='font-bold text-4xl'>
        This page is under construction. Why not check out my{' '}
        <span>
          <Link
            href='https://github.com/evgeniyp92'
            target='_blank'
            className='underline'>
            Github
          </Link>
        </span>{' '}
        instead?
      </warning>
      <h1 className='text-3xl'>Work</h1>
      <div>
        <h2 className='text-2xl'>Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.slug}>
              <Link href={'/projects/' + project.slug}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl'>Research</h2>
        <p>Watch this space</p>
      </div>
    </div>
  );
}
