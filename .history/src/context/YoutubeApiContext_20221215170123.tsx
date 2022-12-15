import { createContext, ReactNode, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import { YoutubeApiContextType } from '../types/video';

export const YoutubeApiContext = createContext<YoutubeApiContextType | null>(
  null
);
const youtube = new Youtube();
export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi(): YoutubeApiContextType {
  const youtube = useContext(YoutubeApiContext);

  if (!youtube) throw new Error('youtube not found');
  return youtube;
}
