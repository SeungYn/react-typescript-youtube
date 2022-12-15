import { createContext, ReactNode, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

type YoutubeApiContextType = {
  youtube: Youtube | FakeYoutube;
};
export const YoutubeApiContext = createContext<YoutubeApiContextType>({});
const youtube = new Youtube();
export function YoutubeApiProvider({ children }: { children: ReactNode }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
