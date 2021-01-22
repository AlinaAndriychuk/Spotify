import React from 'react';
import {Playlists} from '../components/playlists/playlists';
import './menu-bar-view.sass';
import {YourMusic} from '../components/your-music/your-music';
import {MainMenu} from '../components/main-menu/main-menu';
import {AddPlaylistButton} from '../components/add-playlist-button/add-playlist-button';
import {CurrentTrackCover} from '../components/current-track-cover/current-track-cover';

const playlists = ['Doo Wop', 'Pop Classics', 'Love $ongs', 'Hisper', 'New Music Friday', 'Techno Poppers', 'Summer Soothers', 'Hard Rap', 'Pop Rap', '5 Stars', 'Dope Dancin', 'Sleep'];
const currentSong = 'Some Type of Love';
const currentArtistName = 'Charlie Puth';
const currentArtistImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg';
const currentTrackAdded = true;

export const MenuBar = () => {
   return (
    <div className="menu-bar">
      <div className="menu-bar__navigation">
        <MainMenu name="main"></MainMenu>
        <YourMusic name="your music"></YourMusic>
        <Playlists itemNames={playlists} name="playlists"></Playlists>
      </div>
      <AddPlaylistButton/>
      <CurrentTrackCover song={currentSong} artist={currentArtistName} image={currentArtistImage} added={currentTrackAdded}></CurrentTrackCover>
    </div>
  )
};