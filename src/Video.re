open Utils;

[@react.component]
let make = (~video: Api.video) =>
  <li key={video.id.videoId}>
    <img src={video.snippet.thumbnails.default.url} />
    <p> {s(video.snippet.title)} </p>
    <button> {s("add to playlist")} </button>
  </li>;
