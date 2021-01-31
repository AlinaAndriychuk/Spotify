import React from 'react';
import './artist-bar.sass';
import { TextButton } from '../../../../ui/text-button/text-button';
import { MoreButton } from '../../../../ui/more-button/more-button'

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
      <img className="artist-bar__back" src={artistBackground} alt={artistBackground} />
      <div className="artist-bar__info">
        <div className="artist-bar__image-container">
          <img className="artist-bar__image" src={artistImage} alt={artistImage} />
        </div>
        <p className="artist-bar__title">
          artist
        </p>
        <h1 className="artist-bar__name">
          {name}
        </h1>
        <div className="artist-bar__info-actions">
          <TextButton fill="green" border="green-border" text="▶ play"/>
          <TextButton fill="transparent" border="white-border" text="follow"/>
          <MoreButton size="big"/>
        </div>
      </div>
      <div className="artist-bar__listeners">
        <p className="artist-bar__listeners-number">
          {listeners}
        </p>
        <p className="artist-bar__listeners-text">
          monthly listeners
        </p>
      </div>
    </div>
  )
};