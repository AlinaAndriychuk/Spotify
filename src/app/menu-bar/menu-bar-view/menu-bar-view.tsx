import React, {useState} from 'react';
import './menu-bar-view.sass';
import {Menu} from '../components/menu/menu';
import {AddPlaylistButton} from '../components/add-playlist-button/add-playlist-button';
import {CurrentTrackCover} from '../components/current-track-cover/current-track-cover';
import { MainMenu } from '../components/main-menu/main-menu';
import { YourMusic } from '../components/your-music/your-music';
import { Playlists } from '../components/playlists/playlists';
import MdMenu from 'react-ionicons/lib/MdMenu';
import MdClose from 'react-ionicons/lib/MdClose';

const currentSong = 'Some Type of Love';
const currentArtistName = 'Charlie Puth';
const currentArtistImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg';
const currentTrackAdded = true;

const playlists = [
  {value: 1, name: 'Doo Wop'},
  {value: 2, name: 'Pop Classics'},
  {value: 3, name: 'Love $ongs'},
  {value: 4, name: 'Hisper'},
  {value: 5, name: 'New Music Friday'},
  {value: 6, name: 'Techno Poppers'},
  {value: 7, name: 'Summer Soothers'},
  {value: 8, name: 'Hard Rap'},
  {value: 9, name: 'Pop Rap'},
  {value: 10, name: '5 Stars'},
  {value: 11, name: 'Dope Dancin'},
  {value: 12, name: 'Sleep'}
];

export interface PlaylistsOptions {
  value: number;
  name: string;
}

export const MenuBar = () => {
  const [opened, setOpened] = useState(false)

  const changeNavState = () => {
    setOpened(!opened)
  }

  return (
    <div className="menu-bar">
      { opened ? <MdClose className="menu-bar__button" onClick={changeNavState}/> : <MdMenu className="menu-bar__button menu-bar__button_open" onClick={changeNavState}/>}
      <div className="menu-bar__navigation">
        <Menu name="main">
          <MainMenu />
        </Menu>
        <Menu name="your music">
          <YourMusic/>
        </Menu>
        <Menu name="your music">
          <Playlists props={playlists} />
        </Menu>
      </div>
      <AddPlaylistButton/>
      <CurrentTrackCover song={currentSong} artist={currentArtistName} image={currentArtistImage} added={currentTrackAdded}/>
    </div>
  )
};