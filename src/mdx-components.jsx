// Create a unified styling of components here, also supports custom rendering!

// TODO: Update config IAW this github page https://github.com/tailwindlabs/tailwindcss/discussions/10147
// This will fix Tailwind not working here
// TL;DR: This specific file is outside of the default Tailwind config object of what files to pick up and process

// TODO: Consider not pushing too far on this before rebuilding the project and trying to take advantage of Monaco

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1
        className='font-bold text-blue-600' // this works as Tailwind?
        style={{ fontSize: '4em' }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className=''
        style={{ fontWeight: 700 }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className='h3'>{children}</h3>,
    pre: ({ children }) => <pre className='code'>{children}</pre>, // can use apply directives in globals.css to style components. not great but not awful either. maybe there's something online about how to deconflict tailwind with mdx
    // code: ({ children }) => <code className='code'>{children}</code>,
    ...components,
  };
}
