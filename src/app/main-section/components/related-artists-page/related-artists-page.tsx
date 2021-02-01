import React from 'react';
import './related-artists-page.sass';
import { ArtistCard } from '../artist-card/artist-card';
import { ArtistOptions } from '../tabs-view/tabs-view'


interface ArtistsPageProps {
  props: ArtistOptions[];
}

export const ArtistsPage: React.FunctionComponent<ArtistsPageProps> = ({
  props
}) => {
  return (
    <div className="artists-page">
      {
        props.map(option => {
          return (
            <div className="artists-page__item" key={option.value}>
              <ArtistCard name={option.name} image={option.image} />
            </div>
          )
        })
      }
    </div>
  )
};