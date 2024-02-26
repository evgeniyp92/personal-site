export default function MDXLayout({ children }) {
  return (
    <div className='container mx-auto'>
      <article className='prose prose-sm lg:prose-base prose-pre:p-0'>
        {children}
      </article>
    </div>
  );
}
