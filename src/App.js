import React, { useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';
import './App.css';

import ImageCard from './Components/ImageCard'

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const compressImages = async(image) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 920,
      useWebWorker: true
    }

    try {
      const compressedFile = await imageCompression(image, options)
      return compressedFile
    } catch (error) {
      console.log(`${error}: - failed to compress file`)
    }
  }


  return (
    <div className='app'>
      {
        images && images.map(img => (
          <ImageCard image={img} />
        
        ))
      }
    </div>
  );
}

export default App;
