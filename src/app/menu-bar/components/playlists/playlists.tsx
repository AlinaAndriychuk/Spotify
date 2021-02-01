import React from 'react';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import { PlaylistsOptions } from '../menu/menu';

interface PlaylistsProps {
  props: PlaylistsOptions[];
};

export const Playlists: React.FunctionComponent<PlaylistsProps> = ({
  props,
}) => {
  return (
    <menu className="nav-list">
      {
        props.map( option => {
          return (
            <li className="nav-list__item" key={option.value}>
              <a className="nav-list__link" href="./index.html">
                <IosMusicalNotes className="nav-list__item-icon"/>
                {option.name}
              </a>
            </li>
          )
        })
      }
    </menu>
  )
};