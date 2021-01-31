import React from 'react';
import './artist-card.sass';
import MdPlay from 'react-ionicons/lib/MdPlay'

interface ArtistCardProps {
  image: string;
  name: string;
}

export const ArtistCard: React.FunctionComponent<ArtistCardProps> = ({
  image,
  name,
}) => {
  const style = {
    backgroundImage: 'url(' + image + ')',
  }

  return (
    <div className="artist-card">
      <div className="artist-card__image" style={style}>
        <MdPlay className="artist-card__play"/>
      </div>
      <a className="artist-card__name" href="./index.html">
        {name}
      </a>
    </div>
  )
};