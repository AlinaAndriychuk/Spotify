import React from 'react';
import './add-playlist-button.sass';

export const AddPlaylistButton = () => {
   return (
    <div className="menu-bar__add-button">
      <a className="menu-bar__add-link" href="./index.html">
        <img src="../../../../img/plus.svg" alt="new playlist"/>
        New Playlist
      </a>
    </div>
  )
};