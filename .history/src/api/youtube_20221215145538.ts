export async function search() {
  return axios.get('/videos/popular.json').then((res) => res.data.items);
}
