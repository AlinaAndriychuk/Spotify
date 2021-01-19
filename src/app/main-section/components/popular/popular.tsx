import React from 'react';
import './popular.sass';
import {PopularItem} from '../popular-item/popular-item'

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
        images.map( (src, index) => {
          return (
            <li className="popular__item"  key={index}>
              <PopularItem image={src} added={added[index]} number={index + 1} name={names[index]} plays={plays[index]}></PopularItem>
            </li>
          )
        })
      }
    </ul>
  )
};