//Implement the following code

const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
vDocument.appendChild(body);

vDocument.render();

/** Output of render
    <html>
        <body>
            <div>
                Hello, I am a div!
            </div>
        </body>
    </html>

**/

//Answer

const INDENT_SIZE = 4;
const getSpaces = (length) => {
  return new Array(length).fill(" ").join("");
};

class Node {
  constructor(name) {
    this.name = name;
    this.innerHTML = "";
    this.children = [];
  }
  appendChild(node) {}
}

class VDocument extends Node {
  constructor() {
    super("html");
  }
  createElement(nodeName) {
    return new Node(nodeName);
  }
  render() {
    function printTree(currentNode, currentLevel) {
      const spaces = getSpaces(currentLevel * INDENT_SIZE);
      let output = "";
      //Opening Tag
      output += `${spaces}<${currentNode.name}>\n`;
      if (currentNode.innerHTML) {
        output += `${spaces}${getSpaces(INDENT_SIZE)}${
          currentNode.innerHTML
        }\n`;
      }
      for (let i = 0; i < currentNode.children.length; i++) {
        output += printTree(currentNode.children[i], currentLevel + 1);
      }
      //Closing Tag
      output += `${spaces}</${currentNode.name}>\n`;
      return output;
    }
    console.log(printTree(this, 0));
  }
}
