import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideoType } from '../types/video';

export default function Videos() {
  const { keyword } = useParams();

  const [videos, setVideos] = useState<Array<VideoType> | []>([]);
  useEffect(() => {
    axios.get('/videos/popular.json').then((res) => console.log(res));
  }, [keyword]);
  return <div>videos {keyword ? `${keyword}` : '핫트렌드'}</div>;
}
