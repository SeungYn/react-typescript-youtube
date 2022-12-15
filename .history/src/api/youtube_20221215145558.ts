import axios from 'axios';

export async function search() {
  return axios.get('/videos/popular.json').then((res) => res.data.items);
}
