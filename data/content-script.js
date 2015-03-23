self.on("click", function (node) {
  var id = node.getAttribute("id");
  self.postMessage(id);
});

