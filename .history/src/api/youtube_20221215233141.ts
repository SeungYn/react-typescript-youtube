import axios, { Axios, AxiosInstance, AxiosResponse } from 'axios';

export interface ServiceClient {
  videos(params?: any): Promise<AxiosResponse>;
  search(params?: any): Promise<AxiosResponse>;
}

export default class Youtube {
  private readonly apiClient: ServiceClient;
  constructor(apiClient: ServiceClient) {
    this.apiClient = apiClient;
  }

  private async searchByKeyword(keyword?: string) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
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
