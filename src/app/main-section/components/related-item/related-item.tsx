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
    <div className="related-block">
      <img className="related-block__image" src={image} alt={name}/>
      <p className="related-block__name">
        {name}
      </p>
    </div>
  )
};