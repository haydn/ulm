import React, { useState } from "react";
import katex from "katex";
import "./App.css";

import { compile, toLatex } from "ulm-js";

const useCompiler = (
  initialCode: string
): [string, object, string, (newCode: string) => void] => {
  const render = (newCode: string): [object, string] => {
    let newAst, newHtml;

    try {
      newAst = compile(newCode);
      newHtml = katex.renderToString(toLatex(newAst), {
        throwOnError: false
      });
    } catch (error) {
      newAst = { error };
      newHtml = "";
    }

    return [newAst, newHtml];
  };

  const [initialAst, initialHtml] = render(initialCode);

  const [code, setCode] = useState(initialCode);
  const [ast, setAst] = useState(initialAst);
  const [html, setHtml] = useState(initialHtml);

  return [
    code,
    ast,
    html,
    (newCode: string): void => {
      const [newAst, newHtml] = render(newCode);
      setCode(newCode);
      setAst(newAst);
      setHtml(newHtml);
    }
  ];
};

const App: React.FC = () => {
  const [code, ast, html, update] = useCompiler(
    "NumericEqualRelation(\n  NumericAdditionOperation(\n    NumericAdditionOperation(0.1, 0.3),\n    0.2\n  ),\n  3/5\n)"
  );
  return (
    <div style={{ width: 1280, margin: "0 auto 5em" }}>
      <h1>ULM Playground</h1>
      <h2>Code</h2>
      <div style={{ display: "flex" }}>
        <textarea
          style={{ flex: "1" }}
          rows={10}
          value={code}
          onChange={e => {
            update(e.target.value);
          }}
        />
        <div>
          <strong>Rational number literals</strong>
          <ul>
            <li>
              <code>1_312</code>
            </li>
            <li>
              <code>1.4_42</code>
            </li>
            <li>
              <code>1/3</code>
            </li>
            <li>
              <code>+3</code>
            </li>
            <li>
              <code>-6.66</code>
            </li>
            <li>
              <code>-8/76</code>
            </li>
          </ul>
          <strong>Operators</strong>
          <ul>
            <li>
              <code>NumericEqualRelation</code>
            </li>
            <li>
              <code>NumericNotEqualRelation</code>
            </li>
            <li>
              <code>NumericAdditionOperation</code>
            </li>
            <li>
              <code>NumericMultiplicationOperation</code>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h2>AST</h2>
          <pre>{JSON.stringify(ast, null, 2)}</pre>
        </div>
        <div>
          <h2>Latex</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
};

export default App;
