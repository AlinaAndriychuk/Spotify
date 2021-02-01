import React, { useState } from 'react';
import {MenuTitle} from '../menu-title/menu-title';
import {MainMenu} from '../main-menu/main-menu';
import {YourMusic} from '../your-music/your-music'
import {Playlists} from '../playlists/playlists';

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

interface MainMenuProps {
  name: string;
  mainMenu?: boolean;
  yourMusicMenu?: boolean;
  playlistsMenu?: boolean;
};

export const Menu: React.FunctionComponent<MainMenuProps> = ({
  name,
  mainMenu,
  yourMusicMenu,
  playlistsMenu,
}) => {
  const [opened, setOpened] = useState(true);

  const changeMenuState = () => {
    setOpened(!opened);
  }

  return (
    <nav className="nav">
      <MenuTitle name={name} opened={opened} onChange={changeMenuState}/>
      { opened && mainMenu && <MainMenu/>}
      { opened && yourMusicMenu && <YourMusic/>}
      { opened && playlistsMenu && <Playlists props={playlists}/>}
    </nav>
  )
};