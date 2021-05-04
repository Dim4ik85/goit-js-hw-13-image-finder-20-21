const API_KEY = '19367705-6c391461160466e2850694aab';
const BASE_URL = 'https://pixabay.com/api/';

export default class apiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchHits() {
    const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&per_page=12&page=${this.page}`;
    
    return fetch(url)
      .then(response => response.json())
      .then((newData) => {
          this.incrementPage();
          
          return newData;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
