import axios from 'axios';

const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b4c51a09aamsh1e83d9031451183p19ffdbjsnaacde3a80c17',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    // console.log(data);
    // console.log(data.items);
    return data;
}

export  {fetchFromAPI, BASE_URL};