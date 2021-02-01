import React from 'react';
import './related-item.sass'

interface RelatedItemProps {
  image: string;
  name: string;
}

export const RelatedItem: React.FunctionComponent<RelatedItemProps> = ({
  image,
  name,
}) => {
  return (
    <div className="artist-preview">
      <img className="artist-preview__image" src={image} alt={name} />
      <p className="artist-preview__name">
        {name}
      </p>
    </div>
  )
};