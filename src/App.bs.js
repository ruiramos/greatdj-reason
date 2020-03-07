'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$ReasonReactExamples = require("./Api.bs.js");
var Header$ReasonReactExamples = require("./Header.bs.js");
var Content$ReasonReactExamples = require("./Content.bs.js");

function App(Props) {
  var match = React.useState((function () {
          return /* [] */0;
        }));
  var setItems = match[1];
  var match$1 = React.useState((function () {
          return "";
        }));
  var search = match$1[0];
  var handleSubmit = function (e) {
    e.preventDefault();
    Api$ReasonReactExamples.searchFor(search).then((function (res) {
            Curry._1(setItems, (function (l) {
                    return res[/* items */2];
                  }));
            return Promise.resolve(res);
          }));
    return /* () */0;
  };
  return React.createElement("div", undefined, React.createElement(Header$ReasonReactExamples.make, {
                  handleSubmit: handleSubmit,
                  setSearch: match$1[1],
                  search: search
                }), React.createElement(Content$ReasonReactExamples.make, {
                  items: match[0]
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
