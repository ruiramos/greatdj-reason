'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Video$ReasonReactExamples = require("./Video.bs.js");

var contentContainer = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.padding2(Css.px(20), Css.px(0)),
        /* [] */0
      ]
    ]);

var Styles = {
  contentContainer: contentContainer
};

function renderItems(items) {
  return Belt_List.toArray(Belt_List.map(items, (function (video) {
                    return React.createElement(Video$ReasonReactExamples.make, {
                                video: video
                              });
                  })));
}

function Content(Props) {
  var items = Props.items;
  return React.createElement("div", {
              className: contentContainer
            }, React.createElement("ul", undefined, renderItems(items)));
}

var make = Content;

exports.Styles = Styles;
exports.renderItems = renderItems;
exports.make = make;
/* contentContainer Not a pure module */
