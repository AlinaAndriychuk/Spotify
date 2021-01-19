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
    <React.Fragment>
      <img className="related__image" src={image} alt={name}/>
      <p className="related__name">
        {name}
      </p>
    </React.Fragment>
  )
};