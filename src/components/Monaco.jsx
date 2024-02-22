'use client';

// Extracing the Monaco editor to its own component so that MDX can be SSR'd hopefully
import { Editor } from '@monaco-editor/react';

const Monaco = () => (
  <Editor
    height='50vh'
    defaultLanguage='javascript'
    defaultValue='// Hello world'
  />
);

export default Monaco;
