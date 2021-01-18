import React from 'react';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes'

interface PlaylistsItemProps {
  name: string;
};

export const PlaylistsItem: React.FunctionComponent<PlaylistsItemProps> = ({
  name,
}) => {

  return (
    <li className="menu-bar__item">
      <a className="menu-bar__link" href="./index.html">
        <IosMusicalNotes className="menu-bar__item-icon"></IosMusicalNotes>
        {name}
      </a>
    </li>
  )
};