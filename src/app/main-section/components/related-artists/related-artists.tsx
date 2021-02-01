import React from 'react';
import './related-artists.sass'
import { RelatedItem } from '../related-item/related-item'
import { RelatedOptions } from '../overview-top/overview-top';

interface RelatedArtistsProps {
  props: RelatedOptions[];
}

export const RelatedArtists: React.FunctionComponent<RelatedArtistsProps> = ({
  props
}) => {
  return (
    <ul className="related">
      {
        props.map( option => {
          return (
            <li className="related__item" key={option.value}>
              <RelatedItem name={option.name} image={option.image}/>
            </li>
          )
        })
      }
    </ul>
  )
};