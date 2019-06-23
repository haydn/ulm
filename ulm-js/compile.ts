import tokenize from "./tokenize";
import parse from "./parse";
import AST from "./AST";

const compile = (script: string): AST => parse(tokenize(script));


export default compile;
