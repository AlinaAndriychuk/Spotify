import React from 'react';
import {Playlists} from '../components/playlists/playlists';
import './menu-bar-view.sass';
import {YourMusic} from '../components/your-music/your-music';
import {MainMenu} from '../components/main-menu/main-menu';

const itemNames = {
  'main': ['Browse', 'Activity', 'Radio'],
  'your music': ['Songs', 'Album', 'Artists', 'Local files'],
  'playlists': ['Doo Wop', 'Pop Classics', 'Love $ongs', 'Hisper', 'New Music Friday', 'Techno Poppers', 'Summer Soothers', 'Hard Rap', 'Pop Rap', '5 Stars', 'Dope Dancin', 'Sleep']
};

export const MenuBar = () => {
   return (
    <div className="menu-bar">
      <MainMenu name="main"></MainMenu>
      <YourMusic name="your music"></YourMusic>
      <Playlists itemNames={itemNames.playlists} name="playlists"></Playlists>
    </div>
  )
};