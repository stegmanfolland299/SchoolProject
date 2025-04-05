let Node = require('node');

function createNode(nodeName) {
  let node = new Node({name: nodeName});
  console.log(`Created Node: ${nodeName}`);
}

createNode("Alice");
createNode("Bob");

console.log("All nodes created.");
