import axios from 'axios';

const API_KEY = '49151094-8ac09ac945db1b564ff4c2f08';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(url).then(response => {
    if (response.data.hits.length === 0) {
      return Promise.reject('No images found.');
    }
    return response.data.hits;
  });
}
