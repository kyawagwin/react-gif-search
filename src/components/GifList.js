import React from 'react';

import GifItem from './GifItem';

import './GifList.css';

const GifList = (props) => {
  const gifItems = props.gifs.map((gif) => {
    return <GifItem key={ gif.id } gif={ gif } />
  });

  return (
    <div className="ui four column doubling stackable grid container gif-list">
      { gifItems }
    </div>
  );
}

export default GifList;