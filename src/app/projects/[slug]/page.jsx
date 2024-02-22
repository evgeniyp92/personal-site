// get route params
import Markdown from 'react-markdown';

const markdown = '# Hello world';

export default function ProjectPage({ params }) {
  return (
    <div>
      ProjectPage
      <h1>Slug: {params.slug}</h1>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
