import React from 'react';
import './current-track-cover.sass';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import IosAdd from 'react-ionicons/lib/IosAdd';

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
  const choseAddedIcon = () => {
    if (added) {
      return <MdCheckmark className={"menu-bar__cover-checkmark"}/>
    } else {
      return <IosAdd className={"menu-bar__cover-checkmark"}></IosAdd>
    }
  };

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
      {
        choseAddedIcon()
      }
    </div>
  )
};