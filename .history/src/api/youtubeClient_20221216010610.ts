import axios, { Axios, AxiosInstance } from 'axios';
import { ServiceClient } from './youtube';

export default class YoutubeClient implements ServiceClient {
  private readonly httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: `https://www.googleapis.com/youtube/v3`,
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params: any) {
    return this.httpClient.get('search', params);
  }

  async videos(params: any) {
    return this.httpClient.get('videos', params);
  }

  async channels(params: any) {
    return this.httpClient.get('channels', params);
  }
}
