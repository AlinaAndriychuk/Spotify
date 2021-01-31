import React from 'react';
import './artist-block.sass';
import MdPlay from 'react-ionicons/lib/MdPlay'

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
    <div className="artist-block">
      <div className="artist-block__image" style={style}>
        <MdPlay className="artist-block__play"/>
      </div>
      <a className="artist-block__name" href="./index.html">
        {name}
      </a>
    </div>
  )
};