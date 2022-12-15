import { createContext, ReactNode, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import { YoutubeApiContextType } from '../types/video';

const youtube = new Youtube();
export const YoutubeApiContext = createContext<YoutubeApiContextType | null>(
  null
);

export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi(): YoutubeApiContextType {
  return useContext(YoutubeApiContext) as YoutubeApiContextType;
}
