import React from 'react';
import { VideoSnippet, VideoType } from '../types/video';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
register('ko', koLocale);
export default function Video({ video: { snippet } }: { video: VideoType }) {
  const { title, thumbnails, publishedAt, channelTitle }: VideoSnippet =
    snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{format(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
