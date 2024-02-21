// get route params

export default function ProjectPage({ params }) {
  return (
    <div>
      ProjectPage
      <h1>Slug: {params.slug}</h1>
    </div>
  );
}
