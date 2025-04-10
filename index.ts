import { generate } from '@babel/generator'
import { parse } from '@babel/parser'

const code = "console.log(\"hello world \")"
const ast = parse(code)

console.log(ast)