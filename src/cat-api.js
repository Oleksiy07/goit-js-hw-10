const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_QONdtJf98S9qvVlZEUfOkqE4gbvptLEildnFyoe0z46ZsnsjRrpyL5ALFU33a29n';

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';

  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
