import React, { useState } from "react";
import katex from "katex";
import "./App.css";

import { AST, compile, toLatex } from "ulm-js";

const useCompiler = (
  initialCode: string
): [
  string,
  { ast?: AST; error?: string },
  { html?: string; error?: string },
  (newCode: string) => void
] => {
  const render = (
    newCode: string
  ): [{ ast?: AST; error?: string }, { html?: string; error?: string }] => {
    let newAst, newHtml;

    try {
      newAst = { ast: compile(newCode) };
      try {
        newHtml = {
          html: katex.renderToString(toLatex(newAst.ast), {
            throwOnError: false
          })
        };
      } catch (error) {
        newHtml = { error: error.toString() };
      }
    } catch (error) {
      newAst = { error: error.toString() };
      newHtml = { html: "" };
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
  const [
    code,
    { ast, error: astError },
    { html, error: htmlError },
    update
  ] = useCompiler(
    "NumericEqualRelation(\n  NumericAdditionOperation(\n    NumericAdditionOperation(0.1, 0.3),\n    0.2\n  ),\n  3/5\n)"
  );
  return (
    <div style={{ width: 1280, margin: "0 auto 5em" }}>
      <h1>ULM Playground</h1>
      <h2>Code</h2>
      <div style={{ display: "flex" }}>
        <textarea
          style={{ flex: "1", fontFamily: "monospace", fontSize: 14 }}
          rows={10}
          value={code}
          onChange={e => {
            update(e.target.value);
          }}
        />
        <div>
          <strong>Natural number literals</strong>
          <ul>
            <li>
              <code>1n</code>
            </li>
            <li>
              <code>2n</code>
            </li>
            <li>
              <code>3_000_245n</code>
            </li>
          </ul>
          <strong>Integer number literals</strong>
          <ul>
            <li>
              <code>0i</code>
            </li>
            <li>
              <code>+0i</code>
            </li>
            <li>
              <code>-0i</code>
            </li>
            <li>
              <code>-2_345i</code>
            </li>
            <li>
              <code>45_000i</code>
            </li>
          </ul>
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
              <code>RationalNumber</code>
            </li>
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
          <pre>{astError ? astError : JSON.stringify(ast, null, 2)}</pre>
        </div>
        <div>
          <h2>Latex</h2>
          {htmlError ? (
            htmlError
          ) : (
            <div dangerouslySetInnerHTML={{ __html: html || "" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
