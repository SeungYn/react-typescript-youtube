import { createContext, ReactNode, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
import { YoutubeApiContextType } from '../types/video';

export const YoutubeApiContext = createContext<{ youtube: Youtube } | null>(
  null
);
const client = new YoutubeClient();
const youtube = new Youtube(client); //new Youtube();
export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi(): { youtube: Youtube } {
  const youtube = useContext(YoutubeApiContext);
  if (!youtube) throw new Error('youtube not found');
  return youtube;
}
