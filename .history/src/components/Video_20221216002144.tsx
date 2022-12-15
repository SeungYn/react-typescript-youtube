import { VideoSnippet, VideoType } from '../types/video';
import { formatAgo } from '../util/data';

export default function Video({ video: { snippet } }: { video: VideoType }) {
  const { title, thumbnails, publishedAt, channelTitle }: VideoSnippet =
    snippet;

  return (
    <li className='flex flex-col'>
      <img className='w-full' src={thumbnails.medium.url} />
      <div>
        <p className='font-semibold my-2'>{title}</p>
        <p className='text-sm opacity-5'>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
