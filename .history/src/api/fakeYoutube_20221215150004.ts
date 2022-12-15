import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword: string) {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  }
}
