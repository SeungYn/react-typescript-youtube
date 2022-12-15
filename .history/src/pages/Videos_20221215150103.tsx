import { useQuery } from '@tanstack/react-query';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { search } from '../api/youtube';
import Video from '../components/Video';
import { VideoType } from '../types/video';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(['videos', keyword], search);

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
