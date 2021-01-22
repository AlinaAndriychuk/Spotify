import React, {useRef} from 'react';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import {MenuTitle} from '../menu-title/menu-title';

interface PlaylistsProps {
  name: string;
  itemNames: string[];
};

export const Playlists: React.FunctionComponent<PlaylistsProps> = ({
  name,
  itemNames,
}) => {
  const menu = useRef<HTMLMenuElement>(null);

  return (
    <div className="menu-bar__blocK">
      <MenuTitle name={name} menu={menu}></MenuTitle>
      <menu className="menu-bar__list" ref={menu}>
        {
          itemNames.map( (name, index) => {
            return (
              <li className="menu-bar__item" key={index}>
                <a className="menu-bar__link" href="./index.html">
                  <IosMusicalNotes className="menu-bar__item-icon"></IosMusicalNotes>
                  {name}
                </a>
              </li>
            )
          })
        }
      </menu>
    </div>
  )
};