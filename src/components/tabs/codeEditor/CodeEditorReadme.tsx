import ScrollableContainer from "../../containers/ScrollableContainer";
import { TextToken } from "../../text/TextTokens";

const CodeEditorReadme = () => {
  return (
    <div className="mx-auto p-6 max-w-200">
      <h1 className="text-3xl font-bold mb-2">🇵🇭 Tagalog Language</h1>
      <p className="mb-4 text-text-muted">
        Filipino-inspired programming language that compiles to JavaScript.
        Write code using familiar Filipino words — declare variables with{" "}
        <code className="text-primary">ilagay</code>, loop with{" "}
        <code className="text-primary">habang</code>, and print with{" "}
        <code className="text-primary">ilabas</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🚀 Quick Start</h2>
      <p className="mb-2 text-text-muted">
        Write your first tagalog program in the editor and press{" "}
        <span className="text-primary font-medium">▶ Run</span> on the output
        terminal to execute it.
      </p>
      <ScrollableContainer>
        <pre className="bg-base-secondary rounded-md p-4 text-sm overflow-x-auto mb-4 leading-6">
          <TextToken variant="comment"># Declare a variable{"\n"}</TextToken>
          <TextToken variant="keyword">ilagay </TextToken>
          <TextToken variant="variable">pangalan </TextToken>
          <TextToken variant="operator">= </TextToken>
          <TextToken variant="string">"Juan"</TextToken>
          {"\n\n"}
          <TextToken variant="comment"># Print output{"\n"}</TextToken>
          <TextToken variant="function">ilabas</TextToken>
          <TextToken variant="type">{"("}</TextToken>
          <TextToken variant="string">"Kumusta, "</TextToken>
          <TextToken variant="operator"> + </TextToken>
          <TextToken variant="variable">pangalan</TextToken>
          <TextToken variant="operator"> + </TextToken>
          <TextToken variant="string">"!"</TextToken>
          <TextToken variant="type">{")"}</TextToken>
          {"\n\n"}
          <TextToken variant="comment"># While loop{"\n"}</TextToken>
          <TextToken variant="keyword">ilagay </TextToken>
          <TextToken variant="variable">bilang </TextToken>
          <TextToken variant="operator">= </TextToken>
          <TextToken variant="number">0</TextToken>
          {"\n"}
          <TextToken variant="keyword">habang </TextToken>
          <TextToken variant="type">(</TextToken>
          <TextToken variant="variable">bilang</TextToken>
          <TextToken variant="operator"> {"<"} </TextToken>
          <TextToken variant="number">3</TextToken>
          <TextToken variant="type">) {"{"}</TextToken>
          {"\n"}
          {"  "}
          <TextToken variant="function"> ilabas</TextToken>
          <TextToken variant="type">(</TextToken>
          <TextToken variant="variable">bilang</TextToken>
          <TextToken variant="type">)</TextToken>
          {"\n"}
          {"  "}
          <TextToken variant="variable"> bilang </TextToken>
          <TextToken variant="operator">= </TextToken>
          <TextToken variant="variable">bilang </TextToken>
          <TextToken variant="operator">+ </TextToken>
          <TextToken variant="number">1</TextToken>
          {"\n"}
          <TextToken variant="type">{"}"}</TextToken>
        </pre>
      </ScrollableContainer>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        📖 Language Reference
      </h2>

      <h3 className="text-lg font-medium mt-4 mb-2">Variables</h3>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>
          <code className="text-primary">ilagay x = 10</code> — declare a
          mutable variable
        </li>
        <li>
          <code className="text-primary">hindi mabago x = 10</code> — declare a
          constant
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Control flow</h3>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>
          <code className="text-primary">kapag (kondisyon) {"{ }"}</code> — if
          statement
        </li>
        <li>
          <code className="text-primary">kung hindi (kondisyon) {"{ }"}</code> —
          else if
        </li>
        <li>
          <code className="text-primary">kundi {"{ }"}</code> — else
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Loops</h3>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>
          <code className="text-primary">habang (kondisyon) {"{ }"}</code> —
          while loop
        </li>
        <li>
          <code className="text-primary">ulitin 5 {"{ }"}</code> — repeat N
          times
        </li>
        <li>
          <code className="text-primary">tigil</code> — break out of a loop
        </li>
        <li>
          <code className="text-primary">tuloy</code> — continue to next
          iteration
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Functions</h3>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>
          <code className="text-primary">gawa pangalan(params) {"{ }"}</code> —
          define a function
        </li>
        <li>
          <code className="text-primary">ibalik halaga</code> — return a value
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Values</h3>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>
          <code className="text-primary">tama</code> — true
        </li>
        <li>
          <code className="text-primary">mali</code> — false
        </li>
        <li>
          <code className="text-primary">wala</code> — null
        </li>
        <li>
          <code className="text-primary">ilabas(x)</code> — print to output
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Operators</h3>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>
          <code className="text-primary">at</code> — logical AND (&&)
        </li>
        <li>
          <code className="text-primary">o</code> — logical OR (||)
        </li>
        <li>
          <code className="text-primary">hindi</code> — logical NOT (!)
        </li>
        <li>
          <code className="text-primary">+ - * / %</code> — arithmetic
        </li>
        <li>
          <code className="text-primary">== != &lt; &gt; &lt;= &gt;=</code> —
          comparison
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🛠️ Built With</h2>
      <ul className="list-disc ml-6 mb-4 text-text-muted">
        <li>Custom lexer, parser, and emitter (JavaScript)</li>
        <li>Compiles to JavaScript</li>
        <li>Monaco Editor with Tagalog syntax highlighting</li>
        <li>Sandboxed iframe execution</li>
        <li>React, Vite, Tailwind CSS</li>
      </ul>

      <p className="mt-8 text-sm text-text-muted">
        Built with love, caffeine, and Filipino pride. — Giovanni M. Leo
      </p>
    </div>
  );
};

export default CodeEditorReadme;
