'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function videoThumb(json) {
  return /* record */[
          /* height */Json_decode.optional((function (param) {
                  return Json_decode.field("height", Json_decode.$$int, param);
                }), json),
          /* url */Json_decode.field("url", Json_decode.string, json),
          /* width */Json_decode.optional((function (param) {
                  return Json_decode.field("width", Json_decode.$$int, param);
                }), json)
        ];
}

function videoThumbs(json) {
  return /* record */[
          /* default */Json_decode.field("default", videoThumb, json),
          /* high */Json_decode.field("high", videoThumb, json),
          /* medium */Json_decode.field("medium", videoThumb, json)
        ];
}

function videoSnippet(json) {
  return /* record */[
          /* channelId */Json_decode.field("channelId", Json_decode.string, json),
          /* channelTitle */Json_decode.field("channelTitle", Json_decode.string, json),
          /* description */Json_decode.field("description", Json_decode.string, json),
          /* liveBroadcastContent */Json_decode.field("liveBroadcastContent", Json_decode.string, json),
          /* publishedAt */Json_decode.field("publishedAt", Json_decode.string, json),
          /* thumbnails */Json_decode.field("thumbnails", videoThumbs, json),
          /* title */Json_decode.field("title", Json_decode.string, json)
        ];
}

function videoId(json) {
  return /* record */[
          /* kind */Json_decode.field("kind", Json_decode.string, json),
          /* videoId */Json_decode.field("videoId", Json_decode.string, json)
        ];
}

function pagination(json) {
  return /* record */[
          /* totalResults */Json_decode.field("totalResults", Json_decode.$$int, json),
          /* resultsPerPage */Json_decode.field("resultsPerPage", Json_decode.$$int, json)
        ];
}

function video(json) {
  return /* record */[
          /* etag */Json_decode.field("etag", Json_decode.string, json),
          /* kind */Json_decode.field("kind", Json_decode.string, json),
          /* snippet */Json_decode.field("snippet", videoSnippet, json),
          /* id */Json_decode.field("id", videoId, json)
        ];
}

function response(json) {
  return /* record */[
          /* etag */Json_decode.field("etag", Json_decode.string, json),
          /* regionCode */Json_decode.field("regionCode", Json_decode.string, json),
          /* items */Json_decode.field("items", (function (param) {
                  return Json_decode.list(video, param);
                }), json),
          /* pageInfo */Json_decode.field("pageInfo", pagination, json),
          /* kind */Json_decode.field("kind", Json_decode.string, json),
          /* nextPageToken */Json_decode.field("nextPageToken", Json_decode.string, json)
        ];
}

var Decode = {
  videoThumb: videoThumb,
  videoThumbs: videoThumbs,
  videoSnippet: videoSnippet,
  videoId: videoId,
  pagination: pagination,
  video: video,
  response: response
};

function searchFor(term) {
  return fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDLwX06yG_73ImDEubOb5Yv0E_U1iIdTJs&part=snippet&q=" + (String(term) + "&&maxResults=10&type=video")).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve(response(json));
              }));
}

exports.Decode = Decode;
exports.searchFor = searchFor;
/* No side effect */
