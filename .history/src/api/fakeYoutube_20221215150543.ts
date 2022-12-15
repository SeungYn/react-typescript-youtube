import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  private searchByKetword(keyword?: string) {}

  private mostPopular() {}

  async search(keyword: string) {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  }
}
