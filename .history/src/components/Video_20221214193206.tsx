import React from 'react';
import { VideoType } from '../types/video';

export default function Video({ video: { snippet } }: { video: VideoType }) {
  console.log(snippet);
  return <div>{}</div>;
}
