import React from 'react';
import './song.sass';
import {AddedIcon} from '../../../../ui/added-icon/added-icon'
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp';
import MdTrendingDown from 'react-ionicons/lib/MdTrendingDown';

interface SongProps {
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

  return (
    <div className="song">
      {image && <img className="song__icon" src={image} alt={name}/>}
      <p className="song__number">
        {number}
      </p>
      <AddedIcon added={added}/>
      <p className="song__name">
        {name}
      </p>
      { feature && <p className="song__feature"> {feature} </p>}
      <p className="song__label">
        explicit
      </p>
      { plays && <p className="song__plays"> {plays} </p>}
      { time && <p className="song__time"> {time} </p>}
      { (popularity === false || popularity === true) && chosePopularityIcon()}
    </div>
  )
};