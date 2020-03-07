'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonReactExamples = require("./App.bs.js");

var container = document.createElement("div");

document.body.appendChild(container);

Css.$$global("body", /* :: */[
      Css.background(Css.hex("424242")),
      /* :: */[
        Css.color(Css.hex("fafafa")),
        /* :: */[
          Css.fontFamily("sans-serif"),
          /* [] */0
        ]
      ]
    ]);

ReactDom.render(React.createElement(App$ReasonReactExamples.make, { }), container);

exports.container = container;
/* container Not a pure module */
