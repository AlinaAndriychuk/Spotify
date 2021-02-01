import React from 'react';
import './current-track-cover.sass';
import { AddedIcon } from '../../../../ui/added-icon/added-icon'

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
    <div className="track-cover">
      <img className="track-cover__image" src={image} alt={artist} />
      <div className="track-cover__text">
        <a className="track-cover__name" href="./index.html">
          {song}
        </a>
        <a className="track-cover__name" href="./index.html">
          {artist}
        </a>
      </div>
      <AddedIcon added={added} />
    </div>
  )
};