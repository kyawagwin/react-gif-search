import React from 'react';

import './GifItem.css';

const GifItem = (props) => {
  return (
    <div className="column">
      <img className="gif-item" src={ props.gif.images.downsized.url } alt="Animated gif" />
    </div>
  );
};

export default GifItem;