import React from 'react';
import './menu-bar-view.sass';
import {Menu} from '../components/menu/menu';
import {AddPlaylistButton} from '../components/add-playlist-button/add-playlist-button';
import {CurrentTrackCover} from '../components/current-track-cover/current-track-cover';

const currentSong = 'Some Type of Love';
const currentArtistName = 'Charlie Puth';
const currentArtistImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg';
const currentTrackAdded = true;

export const MenuBar = () => {
   return (
    <div className="menu-bar">
      <div className="menu-bar__navigation">
        <Menu name="main" mainMenu={true}/>
        <Menu name="your music" yourMusicMenu={true}/>
        <Menu name="playlists" playlistsMenu={true}/>
      </div>
      <AddPlaylistButton/>
      <CurrentTrackCover song={currentSong} artist={currentArtistName} image={currentArtistImage} added={currentTrackAdded}/>
    </div>
  )
};