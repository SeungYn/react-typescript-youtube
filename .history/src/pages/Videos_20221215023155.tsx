import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import { VideoType } from '../types/video';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    data: videos,
    error,
  }: { isLoading: boolean; data: Object; error: boolean } = useQuery(
    ['videos', keyword],
    async () => {
      throw new Error('a');
    }
  );
  console.log(videos);
  return (
    <div>
      <p>videos {keyword ? `${keyword}` : '핫트렌드'}</p>
      {isLoading && <p>Loading...</p>}
      <>{error && <p>error</p>}</>
      <ul>
        {videos &&
          videos.map((v: VideoType) => {
            return <Video key={v.id} video={v} />;
          })}
      </ul>
    </div>
  );
}
