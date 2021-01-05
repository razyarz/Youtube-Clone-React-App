import axios from 'axios';


const KEY = 'AIzaSyAuZ9RrBlS5n89D-HA6KPBd8hPGInzOx3Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY

  }
  
})