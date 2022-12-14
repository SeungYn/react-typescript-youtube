import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type video = {
  kind: string;
  stag: string;
  id: string;
  snippet: Object;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Object;
  defaultAudioLanguage: string;
};
export default function Videos() {
  const { keyword } = useParams();

  const [];
  useEffect(() => {
    axios.get('/videos/popular.json').then((res) => console.log(res));
  }, [keyword]);
  return <div>videos {keyword ? `${keyword}` : '핫트렌드'}</div>;
}
