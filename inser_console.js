const parser = require("@babel/parser");
const { readFileCode } = require("./utils");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

(async function () {
  const sourceCode = await readFileCode("./source_code.js");
  // 源码转 ast
  const ast = parser.parse(sourceCode, {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  });

  // 遍历 ast
  traverse(ast, {
    CallExpression(path, state) {},
  });
  // 生成目标代码以及 sourceMap
  const { code, map } = generate(ast);

  console.log(code, map);
})();
