import React from 'react';
import './song.sass';
import {AddedIcon} from '../../../../ui/added-icon/added-icon'
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
  const chosePopularityIcon = () => {
    if (popularity) {
      return <MdTrendingUp className="song__popularity"/>
    } else {
      return <MdTrendingDown className="song__popularity"></MdTrendingDown>
    }
  }

  const popularSong = () => {
    return (
      <div className="song">
        <img className="song__icon" src={image} alt={name}/>
        <p className="song__number">
          {number}
        </p>
        <AddedIcon added={added}/>
        <p className="song__name song__name_popular">
          {name}
        </p>
        <p className="song__label song__label_left">
          explicit
        </p>
        <p className="song__plays">
          {plays}
        </p>
      </div>
    )
  };
  
  const trackSong = () => {
    return (
      <div className="song">
        <p className="song__number">
          {number}
        </p>
        <AddedIcon added={added}/>
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
      </div>
    )
  }

  if (full) {
    return trackSong()
  } else {
    return popularSong()
  }
};