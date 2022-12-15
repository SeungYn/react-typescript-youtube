import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

export type VideoType = {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoSnippet;
};

export type VideoSnippet = {
  publishedAt: String;
  channelId: String;
  title: String;
  description: String;
  thumbnails: {
    default: { url: String; width: number; height: number };
    medium: Object;
    height: Object;
    standard: Object;
  };
  channelTitle: String;
  categoryId: String;
  liveBroadcastContent: String;
  localized: Object;
  defaultAudioLanguage: String;
};

export type YoutubeApiContextType = {
  youtube: Youtube | FakeYoutube;
};
