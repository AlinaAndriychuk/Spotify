import React from 'react';
import './track.sass';
import { Song } from '../song/song'
import { TrackOptions } from '../overview/overview';

interface TrackProps {
  props: TrackOptions[];
}

export const Track: React.FunctionComponent<TrackProps> = ({
  props
}) => {

  return (
    <ul className="track">
      {
        props.map(option => {
          return (
            <li className="track__item" key={option.value}>
              <Song number={option.value} name={option.name} feature={option.features} time={option.time} added={option.added} popularity={option.popularity} />
            </li>
          )
        })
      }
    </ul>
  )
};