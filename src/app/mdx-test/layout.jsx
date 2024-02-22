export default function MDXLayout({ children }) {
  return (
    <article className='prose prose-base lg:prose-xl prose-pre:p-0'>
      {children}
    </article>
  );
}
