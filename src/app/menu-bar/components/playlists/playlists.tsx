import React from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';

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
        <IosArrowDown className="menu-bar__title-icon"></IosArrowDown>
      </p>
      <menu className="menu-bar__list">
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