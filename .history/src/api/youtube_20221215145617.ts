import axios from 'axios';

export async function search() {
  console.log('search');
  return axios.get('/videos/popular.json').then((res) => res.data.items);
}
