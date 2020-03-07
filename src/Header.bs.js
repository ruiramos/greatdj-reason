'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$ReasonReactExamples = require("./Utils.bs.js");

var headerContainer = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.padding2(Css.px(20), Css.px(0)),
        /* [] */0
      ]
    ]);

var title = Css.style(/* :: */[
      Css.fontSize(Css.em(0.85)),
      /* :: */[
        Css.margin2(Css.em(1.5), Css.em(0)),
        /* :: */[
          Css.textTransform(Css.uppercase),
          /* :: */[
            Css.fontWeight(Css.semiBold),
            /* [] */0
          ]
        ]
      ]
    ]);

var dimWhite = Css.rgba(250, 250, 250, 0.25);

var almostWhite = Css.rgba(250, 250, 250, 0.9);

var searchInput = Css.style(/* :: */[
      Css.background(Css.transparent),
      /* :: */[
        Css.width(Css.pct(50)),
        /* :: */[
          Css.fontSize(Css.em(2.5)),
          /* :: */[
            Css.color(almostWhite),
            /* :: */[
              Css.border(Css.px(0), Css.solid, Css.black),
              /* :: */[
                Css.borderBottom(Css.px(3), Css.solid, dimWhite),
                /* :: */[
                  Css.outline(Css.px(0), Css.solid, Css.black),
                  /* :: */[
                    Css.padding(Css.px(6)),
                    /* :: */[
                      Css.transition(500, 0, Css.ease, "all"),
                      /* :: */[
                        Css.boxShadow(Css.Shadow.box(Css.px(0), Css.px(2), Css.px(4), Css.px(-2), false, Css.rgba(0, 0, 0, 0.2))),
                        /* :: */[
                          Css.focus(/* :: */[
                                Css.borderBottom(Css.px(3), Css.solid, almostWhite),
                                /* :: */[
                                  Css.boxShadow(Css.Shadow.box(Css.px(0), Css.px(4), Css.px(4), Css.px(-2), false, Css.rgba(0, 0, 0, 0.3))),
                                  /* [] */0
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var searchContainer = Css.style(/* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

var Styles = {
  headerContainer: headerContainer,
  title: title,
  dimWhite: dimWhite,
  almostWhite: almostWhite,
  searchInput: searchInput,
  searchContainer: searchContainer
};

function Header(Props) {
  var handleSubmit = Props.handleSubmit;
  var setSearch = Props.setSearch;
  var search = Props.search;
  return React.createElement("div", {
              className: headerContainer
            }, React.createElement("h1", {
                  className: title
                }, Utils$ReasonReactExamples.s("GREAT DJ")), React.createElement("div", {
                  className: searchContainer
                }, React.createElement("form", {
                      onSubmit: Curry.__1(handleSubmit)
                    }, React.createElement("input", {
                          className: searchInput,
                          autoFocus: true,
                          placeholder: "Search for song or artist...",
                          type: "text",
                          value: search,
                          onChange: (function ($$event) {
                              return Curry._1(setSearch, $$event.target.value);
                            })
                        }))));
}

var make = Header;

exports.Styles = Styles;
exports.make = make;
/* headerContainer Not a pure module */
