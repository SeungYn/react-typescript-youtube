import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
interface Props {
  children?: React.ReactNode;
  id: string;
  name: string;
}
export default function ChannelInfo({ id, name }: Props) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(['channel', id], () => youtube.channelImageURL(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className='flex my-4 mb-8 items-center'>
      {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='text-lg font-medium ml-2'>{name}</p>
    </div>
  );
}
