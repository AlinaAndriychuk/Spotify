import React from 'react';
import './album.sass';
import {TextButton} from '../../../../ui/text-button/text-button';
import {MoreButton} from '../../../../ui/more-button/more-button'

interface AlbumProps {
  image: string;
  name: string;
  year: number;
}

export const Album: React.FunctionComponent<AlbumProps> = ({
  image,
  name,
  year,
}) => {
   return (
    <div className="album">
      <img className="album__image" src={image} alt={name}/>
      <p className="album__year">
        {year}
      </p>
      <p className="album__name">
        {name}
      </p>
      <TextButton text="save" fill="transparent" border="green-border"></TextButton>
      <MoreButton size="small"></MoreButton>
    </div>
  )
};