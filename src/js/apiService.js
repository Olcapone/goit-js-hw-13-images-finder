

export default class ImagesApiServices {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const MY_KEY = `22421278-3374a5bf35dcd0f85e00cdc81`;
        const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;
    
        return fetch(BASE_URL)
         .then(r =>  r.json())
    };

    incrementPage() {
        this.page += 1
    };

    resetPage() {
        this.page = 1
    };
    
    get query() {
        return this.searchQuery
    };

    set query(newQuery) {
         this.searchQuery = newQuery
    }
}