import React from 'react';
import { VideoSnippet, VideoType } from '../types/video';

export default function Video({ video: { snippet } }: { video: VideoType }) {
  const { title, description, thumbnails, publishedAt, channelTitle } = snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} />
    </li>
  );
}
