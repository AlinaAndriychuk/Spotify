import React from 'react';
import './popular.sass';
import { Song } from '../song/song'
import { popularOptions } from '../overview-top/overview-top';

interface PopularProps {
  props: popularOptions[];
}

export const Popular: React.FunctionComponent<PopularProps> = ({
  props
}) => {
  return (
    <ul className="popular">
      {
        props.map(option => {
          return (
            <li className="popular__item" key={option.value}>
              <Song image={option.image} added={option.added} number={option.value} name={option.name} plays={option.plays} />
            </li>
          )
        })
      }
    </ul>
  )
};