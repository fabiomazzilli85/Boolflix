import axios from 'axios';

const API_KEY = '17411c00243f4aba8f358b714d83efbc'; 
const movieAPI = {
  async searchMovies(query) {
    try {
      const response = await axios.get('17411c00243f4aba8f358b714d83efbc', {
        params: {
          api_key: API_KEY,
          query: query,
          language: 'it-IT',
        },
      });
      console.log(response.data.results); 
      return response.data.results; 
    } catch (error) {
      console.error('Errore durante la ricerca dei film:', error);
      throw error;
    }
  },
};

export default movieAPI;
