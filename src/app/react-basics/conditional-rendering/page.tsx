import Header from '@/components/Header';
import CodeBlock from '@/components/ui/code-block';
import { getCodeFromFile } from '@/lib/utils';

export default function ConditionalRendering() {
  const wrongCode = getCodeFromFile(
    'react-basics/conditional-rendering/wrong-way/page.tsx',
  );
  const rightCode = getCodeFromFile(
    'react-basics/conditional-rendering/correct-way/page.tsx',
  );

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen py-12 px-4">
      <Header title="Conditional Rendering" />
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl">
        <CodeBlock
          title="The wrong way"
          code={wrongCode}
          demoLink="/react-basics/conditional-rendering/wrong-way"
          buttonColor="red"
        />
        <CodeBlock
          title="The right way"
          code={rightCode}
          demoLink="/react-basics/conditional-rendering/correct-way"
          buttonColor="green"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">Reference</h2>
          <a
            href="https://youtu.be/-yIsQPp31L0?t=155"
            className="text-blue-500 hover:underline"
          >
            https://youtu.be/-yIsQPp31L0?t=155
          </a>
        </div>
      </div>
    </div>
  );
}
