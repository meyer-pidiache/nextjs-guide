import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({
  title,
  code,
  demoLink,
  buttonColor,
}: {
  title: string;
  code: string;
  demoLink: string;
  buttonColor: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <p className={`font-bold text-${buttonColor}-500 text-xl`}>{title}</p>
      <div className="flex flex-col items-center justify-center w-full">
        <SyntaxHighlighter
          language="tsx"
          style={darcula}
          className="rounded-t-md w-full overflow-x-auto !mb-0"
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
        <Link
          className={`bg-${buttonColor}-500 font-bold text-white px-4 py-2 w-full text-center rounded-b-md hover:bg-${buttonColor}-600 hover:text-gray-300 transition-colors`}
          href={demoLink}
        >
          Demo
        </Link>
      </div>
    </div>
  );
}
