import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;