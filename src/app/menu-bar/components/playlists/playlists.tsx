import React from 'react';
import {PlaylistsItem} from '../playlists-item/playlists-item';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';

interface PlaylistsProps {
  name: string;
  itemNames: string[];
};

export const Playlists: React.FunctionComponent<PlaylistsProps> = ({
  name,
  itemNames,
}) => {
  return (
    <div className="menu-bar__blocK">
      <p className="menu-bar__title">
        {name}
        <IosArrowDown className="menu_bar__title-icon"></IosArrowDown>
      </p>
      <menu className="menu-bar__list">
        {
          itemNames.map( (name, index) => {
            return <PlaylistsItem name={name} key={index}></PlaylistsItem>
          })
        }
      </menu>
    </div>
  )
};