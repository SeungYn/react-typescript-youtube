import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { VideoType } from '../types/video';
import Video from './Video';

export default function RelatedVideos({ id }: { id: string }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <>{error && <p>error</p>}</>
      <ul>
        {videos &&
          videos.map((v: VideoType) => {
            return <Video key={v.id.toString()} video={v} type='list' />;
          })}
      </ul>
    </div>
  );
}
