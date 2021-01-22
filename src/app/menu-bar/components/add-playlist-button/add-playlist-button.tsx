import React from 'react';
import './add-playlist-button.sass';
import IosAddCircleOutline from 'react-ionicons/lib/IosAddCircleOutline'

export const AddPlaylistButton = () => {
   return (
    <div className="menu-bar__add-button">
      <a className="menu-bar__add-link" href="./index.html">
        <IosAddCircleOutline className="menu-bar__add-icon"></IosAddCircleOutline>
        New Playlist
      </a>
    </div>
  )
};