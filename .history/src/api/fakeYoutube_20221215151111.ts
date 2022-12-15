import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  private async searchByKeyword(keyword?: string) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  private async mostPopular() {}

  async search(keyword: string) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }
}
