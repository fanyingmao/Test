const CodeEngine  = require("prompt-engine");

const description =
  "Natural Language Commands to JavaScript Math Code. The code should log the result of the command to the console.";

const examples = [
{ input: "what's 10 plus 18", response: "console.log(10 + 18)" },
{ input: "what's 10 times 18", response: "console.log(10 * 18)" },
];
const pythonConfig = {
commentOperator: "#",
}
const codeEngine = new CodeEngine(description, examples);
const query = "What's 1018 times the ninth power of four?";
const prompt = codeEngine.buildPrompt(query);