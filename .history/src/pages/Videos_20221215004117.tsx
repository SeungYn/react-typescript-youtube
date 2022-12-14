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
    isError,
    data: videos,
    error,
  } = useQuery(
    ['videos', keyword],
    async () =>
      await axios.get('/videos/popular.json').then((res) => res.data.items)
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error</p>}
      <ul>
        {videos &&
          videos.map((v: VideoType) => {
            return <Video key={v.id} video={v} />;
          })}
      </ul>
    </>
  );
}
