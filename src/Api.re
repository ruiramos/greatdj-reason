/*
     request
     .get('https://www.googleapis.com/youtube/v3/search')
     .query({
       key: API_KEY,
       part: 'snippet',
       q: q,
       type: 'video',
       maxResults: 15,
       videoDefinition: videoDef,
       topicId: '/m/04rlf'
     })
 */

type response = {
  etag: string,
  regionCode: string,
  items: list(video),
  pageInfo: pagination,
  kind: string,
  nextPageToken: string,
}
and video = {
  etag: string,
  kind: string,
  snippet: videoSnippet,
  id: videoId,
}
and pagination = {
  totalResults: int,
  resultsPerPage: int,
}
and videoId = {
  kind: string,
  videoId: string,
}
and videoSnippet = {
  channelId: string,
  channelTitle: string,
  description: string,
  liveBroadcastContent: string,
  publishedAt: string,
  thumbnails: videoThumbs,
  title: string,
}
and videoThumbs = {
  default: videoThumb,
  high: videoThumb,
  medium: videoThumb,
}
and videoThumb = {
  height: option(int),
  url: string,
  width: option(int),
};

module Decode = {
  let videoThumb = json =>
    Json.Decode.{
      height: json |> optional(field("height", int)),
      url: json |> field("url", string),
      width: json |> optional(field("width", int)),
    };

  let videoThumbs = json =>
    Json.Decode.{
      default: json |> field("default", videoThumb),
      high: json |> field("high", videoThumb),
      medium: json |> field("medium", videoThumb),
    };

  let videoSnippet = json =>
    Json.Decode.{
      title: json |> field("title", string),
      channelId: json |> field("channelId", string),
      channelTitle: json |> field("channelTitle", string),
      description: json |> field("description", string),
      liveBroadcastContent: json |> field("liveBroadcastContent", string),
      publishedAt: json |> field("publishedAt", string),
      thumbnails: json |> field("thumbnails", videoThumbs),
    };

  let videoId = json =>
    Json.Decode.{
      kind: json |> field("kind", string),
      videoId: json |> field("videoId", string),
    };

  let pagination = json =>
    Json.Decode.{
      totalResults: json |> field("totalResults", int),
      resultsPerPage: json |> field("resultsPerPage", int),
    };

  let video = json =>
    Json.Decode.{
      etag: json |> field("etag", string),
      kind: json |> field("kind", string),
      snippet: json |> field("snippet", videoSnippet),
      id: json |> field("id", videoId),
    };

  let response = json =>
    Json.Decode.{
      etag: json |> field("etag", string),
      regionCode: json |> field("regionCode", string),
      kind: json |> field("kind", string),
      nextPageToken: json |> field("nextPageToken", string),
      items: json |> field("items", list(video)),
      pageInfo: json |> field("pageInfo", pagination),
    };
};

let searchFor = term =>
  Js.Promise.(
    Fetch.fetch(
      {j|https://www.googleapis.com/youtube/v3/search?key=AIzaSyDLwX06yG_73ImDEubOb5Yv0E_U1iIdTJs&part=snippet&q=$term&&maxResults=10&type=video|j},
    )
    |> then_(Fetch.Response.json)
    |> then_(json => json |> Decode.response |> resolve)
  );
