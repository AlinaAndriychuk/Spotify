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
    <menu className="nav__list">
      {
        props.map( option => {
          return (
            <li className="nav__item" key={option.value}>
              <a className="nav__link" href="./index.html">
                <IosMusicalNotes className="nav__item-icon"/>
                {option.name}
              </a>
            </li>
          )
        })
      }
    </menu>
  )
};