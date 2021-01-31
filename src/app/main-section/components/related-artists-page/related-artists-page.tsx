import React from 'react';
import './related-artists-page.sass';
import { ArtistCard } from '../artist-card/artist-card'


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
              <ArtistCard name={name} image={images[index]}/>
            </div>
          )
        })
      }
    </div>
  )
};