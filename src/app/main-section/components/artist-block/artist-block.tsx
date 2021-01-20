import React from 'react';
import './artist-block.sass';


interface ArtistBlockProps {
  image: string;
  name: string;
}

export const ArtistBlock: React.FunctionComponent<ArtistBlockProps> = ({
  image,
  name,
}) => {
  return (
    <React.Fragment>
      <img className="artists-page__image" src={image} alt={name}/>
      <a className="artist-page__name" href="./index.html">
        {name}
      </a>
    </React.Fragment>
  )
};