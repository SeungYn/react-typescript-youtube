import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import Video from '../components/Video';
import { VideoType } from '../types/video';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
    return youtube.search(keyword);
  });

  return (
    <div>
      <p>videos {keyword ? `${keyword}` : '핫트렌드'}</p>
      {isLoading && <p>Loading...</p>}
      <>{error && <p>error</p>}</>
      <ul>
        {videos &&
          videos.map((v: VideoType) => {
            return <Video key={v.id.toString()} video={v} />;
          })}
      </ul>
    </div>
  );
}
