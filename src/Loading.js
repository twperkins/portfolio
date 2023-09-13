import React, { useState, useEffect } from 'react';
import './Loading.scss';
import colosseum from './assets/loading/colosseum.svg';
import mountain from './assets/loading/mountain.svg';
import pasta from './assets/loading/pasta.svg';
import sun from './assets/loading/sun.svg';
import trees from './assets/loading/trees.svg';

const Loading = () => {
  const images = [colosseum, mountain, pasta, sun, trees];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const cycleImages = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(cycleImages, 1050);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="loading-container">
      <div className={isLoading ? 'loading-left' : 'loading-left closed'}></div>
      <div className={isLoading ? 'loading-right' : 'loading-right closed'}></div>
      <div className='loading-image-container'>
        {images.map((image, index) => (
          <img
            className={`loading-image ${index === currentImageIndex & isLoading ? 'active' : ''}`}
            key={index}
            src={image}
            alt={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
