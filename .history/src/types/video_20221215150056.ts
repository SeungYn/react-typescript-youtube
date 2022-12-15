export type VideoType = {
  kind: string;
  etag: string;
  id: string | Object;
  snippet: VideoSnippet;
};

export type VideoSnippet = {
  publishedAt: String;
  channelId: String;
  title: String;
  description: String;
  thumbnails: Object;
  channelTitle: String;
  categoryId: String;
  liveBroadcastContent: String;
  localized: Object;
  defaultAudioLanguage: String;
};
