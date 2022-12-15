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
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    height: { url: string; width: number; height: number };
    standard: { url: string; width: number; height: number };
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
