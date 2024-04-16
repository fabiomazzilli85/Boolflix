import axios from 'axios';

const API_KEY = 'e99307154c6dfb0b4750f6603256716d';

export default {
  async searchMovies(query) {
    try {
    //   const response1 = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    //   console.log(response1.data);
    //   console.log(response1.data.results);
    // Questa è una possibilità che Gianluca ci ha prospettato, evidenziando tutti i limiti del caso.
    // Gianluca ci ha consigliato l'approccio seguente, che è più chiaro da interpretare e da leggere.


      const response = axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: API_KEY,
          query: query,
          language: 'it-IT',
        },
      });
      console.log(response.data);
      console.log(response.data.results);
    } catch (error) {
      console.error('Errore durante la ricerca dei film:', error);
      throw error;
    }
  },
};
