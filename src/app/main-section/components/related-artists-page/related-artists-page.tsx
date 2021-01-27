import React from 'react';
import './related-artists-page.sass';
import { ArtistBlock } from '../artist-block/artist-block'


interface ArtistsPageProps {
  images: string[];
  names: string[];
}

export const ArtistsPage: React.FunctionComponent<ArtistsPageProps> = ({
  images,
  names,
}) => {
  return (
    <div className="artists-page">
      {
        names.map((name, index) => {
          return (
            <div className="artists-page__item" key={index}>
              <ArtistBlock name={name} image={images[index]}></ArtistBlock>
            </div>
          )
        })
      }
    </div>
  )
};