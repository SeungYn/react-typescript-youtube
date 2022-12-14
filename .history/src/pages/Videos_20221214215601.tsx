import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import { VideoType } from '../types/video';

export default function Videos() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState<Array<VideoType> | null>(null);

  useEffect(() => {
    axios
      .get('/videos/popular.json')
      .then((res) => setVideos([...res.data.items]));
  }, [keyword]);
  return (
    <div>
      videos {keyword ? `${keyword}` : '핫트렌드'}
      <>
        {videos &&
          videos.map((v) => {
            return <Video key={v.id} video={v} />;
          })}
      </>
    </div>
  );
}
