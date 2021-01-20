import React from 'react';
import './song.sass';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import IosAdd from 'react-ionicons/lib/IosAdd';
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp';
import MdTrendingDown from 'react-ionicons/lib/MdTrendingDown';

interface SongProps {
  full: boolean;
  image?: string;
  name: string;
  plays?: string;
  added: boolean;
  number: number;
  feature?: string;
  time?: string;
  popularity?: boolean;
}

export const Song: React.FunctionComponent<SongProps> = ({
  image,
  full,
  name,
  plays,
  number,
  added,
  feature,
  time,
  popularity,
}) => {
  const choseAddedIcon = () => {
    if (added) {
      return <MdCheckmark className={"song__checkmark song__checkmark_added"}/>
    } else {
      return <IosAdd className={"song__checkmark song__checkmark_not-added"}></IosAdd>
    }
  };

  const chosePopularityIcon = () => {
    if (popularity) {
      return <MdTrendingUp className={"song__popularity"}/>
    } else {
      return <MdTrendingDown className={"song__popularity"}></MdTrendingDown>
    }
  }

  const popularSong = () => {
    return (
      <React.Fragment>
        <img className="song__icon" src={image} alt={name}/>
        <p className="song__number">
          {number}
        </p>
        {
          choseAddedIcon()
        }
        <p className="song__name song__name_popular">
          {name}
        </p>
        <p className="song__label song__label_left">
          explicit
        </p>
        <p className="song__plays">
          {plays}
        </p>
      </React.Fragment>
    )
  };
  
  const trackSong = () => {
    return (
      <React.Fragment>
        <p className="song__number">
          {number}
        </p>
        {
         choseAddedIcon()
        }
        <div className="song__container">
          <p className="song__name">
            {name}
          </p>
          <p className="song__feature">
            {feature}
          </p>
        </div>
        <p className="song__label song__label_right">
          explicit
        </p>
        <p className="song__time">
          {time}
        </p>
        {
          chosePopularityIcon()
        }
      </React.Fragment>
    )
  }

  if (full) {
    return trackSong()
  } else {
    return popularSong()
  }
};