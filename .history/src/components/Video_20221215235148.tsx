import React from 'react';
import { VideoSnippet, VideoType } from '../types/video';

export default function Video({ video: { snippet } }: { video: VideoType }) {
  const { title }: VideoSnippet = snippet;

  return <li></li>;
}
