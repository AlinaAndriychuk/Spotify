import React from 'react';
import './popular.sass';
import { Song } from '../song/song'

interface PopularProps {
  images: string[];
  names: string[];
  plays: string[];
  added: boolean[];
}

export const Popular: React.FunctionComponent<PopularProps> = ({
  images,
  names,
  plays,
  added,
}) => {
  return (
    <ul className="popular">
      {
        images.map((src, index) => {
          return (
            <li className="popular__item" key={index}>
              <Song full={false} image={src} added={added[index]} number={index + 1} name={names[index]} plays={plays[index]}/>
            </li>
          )
        })
      }
    </ul>
  )
};