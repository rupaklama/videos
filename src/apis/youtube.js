import axios from 'axios';

const KEY = 'AIzaSyCYSDQ4qfRBUlh-TZwPRU7cHhx5KfHeucQ';

// axios instance
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // query params
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
})