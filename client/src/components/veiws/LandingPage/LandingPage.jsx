import { useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  useEffect(() => {
    try {
      axios.get('/api/hello')
        .then(response => console.log(response.data))
        .catch(error => {
          // Handle error here
          console.error('Axios Error:', error.message);
        });
    } catch (error) {
      // Handle other errors
      console.error('Error:', error.message);
    }
  }, []);

  return (
    <div>LandingPage</div>
  );
};

export default LandingPage;
