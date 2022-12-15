import { createContext, ReactNode, useContext } from 'react';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext({});
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
