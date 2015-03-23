var contextMenu = require("sdk/context-menu");
var windowUtils = require("sdk/window/utils");
var data = require("sdk/self").data;

var menuItem = contextMenu.Item({
  label: "Link Here",
  context: contextMenu.PredicateContext(function (context) {
    return context.targetID !== null;
  }),
  contentScriptFile: data.url("content-script.js"),
  onMessage: function (id) {
    var window = windowUtils.getFocusedWindow();
    window.location.hash = "#" + id;
  }
});

