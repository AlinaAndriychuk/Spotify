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
  const style = {
    backgroundImage: 'url(' + image + ')',
  }

  return (
    <React.Fragment>
      <div className="artists-page__image" style={style}/>
      <a className="artists-page__name" href="./index.html">
        {name}
      </a>
    </React.Fragment>
  )
};