import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
interface Props {
  children?: React.ReactNode;
  id: string;
  name: string;
}
export default function ChannelInfo({ id, name }: Props) {
  const { youtube } = useYoutubeApi();
  return <div>{name}</div>;
}
