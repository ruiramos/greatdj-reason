[@bs.val] external document: Js.t({..}) = "document";

let container = document##createElement("div");
document##body##appendChild(container);

Css.(
  global(
    "body",
    [
      background(hex("424242")),
      color(hex("fafafa")),
      fontFamily("sans-serif"),
    ],
  )
);

ReactDOMRe.render(<App />, container);
