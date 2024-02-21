import Link from 'next/link';
import * as lib from '../../lib';

export default function ProjectsDirectory() {
  // TODO: This looks like it might be a good candidate for threading if the dir
  // gets big enough...
  let articleNames = lib.getFileNames('src/lib/md/research');
  let projectNames = lib.getFileNames('src/lib/md/projects');

  for (let index = 0; index < articleNames.length; index++) {
    articleNames[index] = articleNames[index].slice(0, -3);
  }

  for (let index = 0; index < projectNames.length; index++) {
    projectNames[index] = projectNames[index].slice(0, -3);
  }

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
          {projectNames.map(project => (
            <li key={project}>
              <Link href={'/projects/' + project}>{project}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl'>Research</h2>
        <ul>
          {articleNames.map(name => (
            <li key={name}>
              <Link href={'/projects/' + name}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
}
