open Utils;

module Styles = {
  /* Open the Css module, so we can access the style properties below without prefixing them with Css. */
  open Css;

  let contentContainer =
    style([textAlign(center), padding2(px(20), px(0))]);
};

let renderItems = items =>
  items
  ->Belt.List.map((video: Api.video) => <Video video />)
  ->Belt.List.toArray
  ->React.array;

[@react.component]
let make = (~items) =>
  <div className=Styles.contentContainer> <ul> items->renderItems </ul> </div>;
