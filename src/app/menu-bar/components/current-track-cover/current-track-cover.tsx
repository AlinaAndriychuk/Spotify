import React from 'react';
import './current-track-cover.sass';
import {AddedIcon} from '../../../../ui/added-icon/added-icon'

interface CurrentTrackCoverProps {
  added: boolean;
  image: string;
  artist: string;
  song: string;
}

export const CurrentTrackCover: React.FunctionComponent<CurrentTrackCoverProps> = ({
  added,
  image,
  artist,
  song
}) => {

  return (
    <div className="menu-bar__cover">
      <img className="menu-bar__cover-image" src={image}  alt={artist}/>
      <div className="menu-bar__cover-text">
        <a className="menu-bar__cover-name" href="./index.html">
          {song}
        </a>
        <a className="menu-bar__cover-name" href="./index.html">
          {artist}
        </a>
      </div>
      <AddedIcon position="right" added={added}></AddedIcon>
    </div>
  )
};