import { useNavigate } from 'react-router-dom';
import { VideoSnippet, VideoType } from '../types/video';
import { formatAgo } from '../util/data';

export default function Video({
  video,
  type,
}: {
  video: VideoType;
  type: string;
}) {
  const navigate = useNavigate();
  const { title, thumbnails, publishedAt, channelTitle }: VideoSnippet =
    video.snippet;

  return (
    <li
      className='flex flex-col'
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className='w-full' src={thumbnails.medium.url} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
