let $ = (selector, node = document) => {
  return node.querySelector(selector);
}

let $$ = (createE) => {
  return document.createElement(createE);
}
