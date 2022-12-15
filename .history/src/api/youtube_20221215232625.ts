import axios, { Axios, AxiosInstance, AxiosResponse } from 'axios';

interface ServiceClient {
  videos(params?: any): Promise<AxiosResponse>;
}

export default class Youtube {
  private readonly httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: `https://www.googleapis.com/youtube/v3`,
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  private async searchByKeyword(keyword?: string) {
    return this.httpClient
      .get(`search`, {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  private async mostPopular() {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }

  async search(keyword: string | undefined) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }
}
