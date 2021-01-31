import React from 'react';
import './add-playlist-button.sass';
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline'

export const AddPlaylistButton = () => {
   return (
    <div className="add-button">
      <a className="add-button__link" href="./index.html">
        <IosAddCircleOutline className="add-button__icon"/>
        New Playlist
      </a>
    </div>
  )
};