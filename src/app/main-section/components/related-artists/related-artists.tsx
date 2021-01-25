import React from 'react';
import './related-artists.sass'
import {RelatedItem} from '../related-item/related-item'

interface RelatedArtistsProps {
  images: string[];
  names: string[];
}

export const RelatedArtists: React.FunctionComponent<RelatedArtistsProps> = ({
  images,
  names,
}) => {
   return (
    <ul className="related">
      {
        images.map( (src, index) => {
          return (
            <li className="related__item" key={index}>
              <RelatedItem name={names[index]} image={src}></RelatedItem>
            </li>
          )
        })
      }
    </ul>
  )
};