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
    async () => await axios.get('/videos/popular.json')
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      videos {keyword ? `${keyword}` : '핫트렌드'}
      <>
        {videos &&
          videos.data.items.map((v) => {
            return <Video key={v.id} video={v} />;
          })}
      </>
    </div>
  );
}
