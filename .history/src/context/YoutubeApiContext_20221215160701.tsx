import { createContext, ReactNode, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';
import { YoutubeApiContextType } from '../types/video';

export const YoutubeApiContext = createContext<YoutubeApiContextType>({
  youtube: new Youtube(),
});

export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  return (
    <YoutubeApiContext.Provider value={}>{children}</YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi(): YoutubeApiContextType {
  return useContext(YoutubeApiContext);
}
