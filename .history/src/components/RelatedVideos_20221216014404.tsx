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
  } = useQuery(['related', id], () => youtube.relatedVideos(id));
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <>{error && <p>error</p>}</>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
        {videos &&
          videos.map((v: VideoType) => {
            return <Video key={v.id.toString()} video={v} />;
          })}
      </ul>
    </div>
  );
}
