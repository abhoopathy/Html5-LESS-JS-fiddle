$(document).ready(function() {
  //var Showdown = require('showdown').Showdown;
  //var converter = new Showdown().converter();

  require(["scripts/showdown"], function(showdown) {
    console.log(showdown);
  });

  //converter.makeHtml('#hello markdown!');
});
