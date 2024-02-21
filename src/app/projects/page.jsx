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
      <h1 className='text-6xl'>Work</h1>
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
      </div>
    </div>
  );
}
