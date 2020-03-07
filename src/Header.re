open Utils;

module Styles = {
  /* Open the Css module, so we can access the style properties below without prefixing them with Css. */
  open Css;

  let headerContainer =
    style([textAlign(center), padding2(px(20), px(0))]);

  let title =
    style([
      fontSize(em(0.85)),
      margin2(em(1.5), em(0.)),
      textTransform(uppercase),
      fontWeight(semiBold),
    ]);

  let dimWhite = rgba(250, 250, 250, 0.25);
  let almostWhite = rgba(250, 250, 250, 0.9);

  let searchInput =
    style([
      background(transparent),
      width(pct(50.)),
      fontSize(em(2.5)),
      color(almostWhite),
      border(px(0), solid, black),
      borderBottom(px(3), solid, dimWhite),
      outline(px(0), solid, black),
      padding(px(6)),
      transition(~duration=500, ~delay=0, ~timingFunction=ease, "all"),
      boxShadow(
        Shadow.box(
          ~x=px(0),
          ~y=px(2),
          ~blur=px(4),
          ~spread=px(-2),
          ~inset=false,
          rgba(0, 0, 0, 0.2),
        ),
      ),
      focus([
        borderBottom(px(3), solid, almostWhite),
        boxShadow(
          Shadow.box(
            ~x=px(0),
            ~y=px(4),
            ~blur=px(4),
            ~spread=px(-2),
            ~inset=false,
            rgba(0, 0, 0, 0.3),
          ),
        ),
      ]),
    ]);

  let searchContainer = style([position(relative)]);
};

[@react.component]
let make = (~handleSubmit, ~setSearch, ~search) =>
  <div className=Styles.headerContainer>
    <h1 className=Styles.title> {s("GREAT DJ")} </h1>
    <div className=Styles.searchContainer>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          type_="text"
          className=Styles.searchInput
          placeholder={j|Search for song or artist...|j}
          value=search
          onChange={event => setSearch(ReactEvent.Form.target(event)##value)}
          autoFocus=true
        />
      </form>
    </div>
  </div>;
