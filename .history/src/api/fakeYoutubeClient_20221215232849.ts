import axios from 'axios';

export default class FakeYoutube implements ServiceClient {
  constructor() {}

  async videos() {
    return axios.get('/videos/search.json');
  }

  async search() {
    return axios.get('/videos/search.json');
  }
}
