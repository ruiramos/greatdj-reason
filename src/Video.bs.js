'use strict';

var React = require("react");
var Utils$ReasonReactExamples = require("./Utils.bs.js");

function Video(Props) {
  var video = Props.video;
  return React.createElement("li", {
              key: video[/* id */3][/* videoId */1]
            }, React.createElement("img", {
                  src: video[/* snippet */2][/* thumbnails */5][/* default */0][/* url */1]
                }), React.createElement("p", undefined, Utils$ReasonReactExamples.s(video[/* snippet */2][/* title */6])), React.createElement("button", undefined, Utils$ReasonReactExamples.s("add to playlist")));
}

var make = Video;

exports.make = make;
/* react Not a pure module */
