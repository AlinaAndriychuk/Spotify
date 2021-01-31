import React from 'react';
import './track.sass';
import { Song } from '../song/song'

interface TrackProps {
  added: boolean[];
  names: string[];
  features: string[];
  time: string[];
  popularity: boolean[];
}

export const Track: React.FunctionComponent<TrackProps> = ({
  added,
  names,
  features,
  time,
  popularity,
}) => {

  return (
    <ul className="track">
      {
        names.map((name, index) => {
          return (
            <li className="track__item" key={index}>
              <Song number={index + 1} full={true} name={name} feature={features[index]} time={time[index]} added={added[index]} popularity={popularity[index]}/>
            </li>
          )
        })
      }
    </ul>
  )
};