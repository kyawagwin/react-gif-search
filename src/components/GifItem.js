import React from 'react';

import './GifItem.css';

const GifItem = ({ gif, onGifSelect }) => {
  return (
    <div className="column" onClick={ () => onGifSelect(gif) }>
      <img className="gif-item" src={ gif.images.downsized.url } alt="Animated gif" />
    </div>
  );
};

export default GifItem;