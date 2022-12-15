import { VideoSnippet, VideoType } from '../types/video';
import { formatAgo } from '../util/data';

export default function Video({ video: { snippet } }: { video: VideoType }) {
  const { title, thumbnails, publishedAt, channelTitle }: VideoSnippet =
    snippet;

  return (
    <li className='flex flex-col'>
      <img className='w-full' src={thumbnails.medium.url} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
