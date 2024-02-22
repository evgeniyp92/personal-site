export default function MDXLayout({ children }) {
  return (
    <div className='container mx-auto flex justify-center'>
      <article className='prose prose-base lg:prose-xl prose-pre:p-0'>
        {children}
      </article>
    </div>
  );
}
