import React from 'react';
import { VideoSnippet, VideoType } from '../types/video';

export default function Video({ video: { snippet } }: { video: VideoType }) {
  const {
    title,
    description,
    thumbnails,
    publishedAt,
    channelTitle,
  }: VideoSnippet = snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{title}</p>
      </div>
    </li>
  );
}
