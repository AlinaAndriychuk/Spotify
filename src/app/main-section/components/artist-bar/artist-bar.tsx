import React from 'react';
import './artist-bar.sass';
import {TextButton} from '../../../../ui/text-button/text-button';
import {MoreButton} from '../more-button/more-button'

interface ArtistBarProps {
  name: string;
  listeners: string;
  artistBackground: string;
  artistImage: string;
};

export const ArtistBar: React.FunctionComponent<ArtistBarProps> = ({
  name,
  listeners,
  artistBackground,
  artistImage,
}) => {
   return (
    <div className="artist-bar">
      <img className="artist-bar__back" src={artistBackground} alt={artistBackground}/>
      <div className="artist-bar__info">
        <img className="artist-bar__image" src={artistImage} alt={artistImage}/>
        <p className="artist-bar__title">
          artist
        </p>
        <h1 className="artist-bar__name">
          {name}
        </h1>
        <TextButton fill="green" border="green-border" text="▶ play"></TextButton>
        <TextButton fill="transparent" border="white-border" text="follow"></TextButton>
        <MoreButton></MoreButton>
      </div>
      <span className="artist-bar__listeners">
        <p className="artist-bar__listeners-number">
          {listeners}
        </p>
        <p className="artist-bar__listeners-text">
          monthly listeners
        </p>
      </span>
    </div>
  )
};