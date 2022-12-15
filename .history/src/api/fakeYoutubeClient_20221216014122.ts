import axios from 'axios';
import { ServiceClient } from './youtube';

export default class FakeYoutubeClient implements ServiceClient {
  constructor() {}

  async videos() {
    return axios.get('/videos/search.json');
  }

  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get('/videos/related.json')
      : axios.get('/videos/search.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
