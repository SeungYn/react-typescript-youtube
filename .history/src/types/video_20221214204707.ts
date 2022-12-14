export type VideoType = {
  kind: string;
  stag: string;
  id: string;
  snippet: Object;
  channelTitle?: string;
  categoryId?: string;
  liveBroadcastContent?: string;
  localized?: Object;
  defaultAudioLanguage?: string;
};

type VideoSnippet = {
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
