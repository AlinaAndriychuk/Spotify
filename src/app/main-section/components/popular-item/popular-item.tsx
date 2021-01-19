import React from 'react';
import './popular-item.sass';

interface PopularItemProps {
  image: string;
  name: string;
  plays: string;
  added: string;
  number: number;
}

export const PopularItem: React.FunctionComponent<PopularItemProps> = ({
  image,
  name,
  plays,
  number,
  added,
}) => {
   return (
    <li className="popular__item">
      <img className="popular__item-icon" src={image} alt={name}/>
      <p className="popular__number">
        {number}
      </p>
      <div className={"popular__" + added}>
      </div>
      <p className="popular__song">
        {name}
      </p>
      <p className="popular__plays">
        {plays}
      </p>
    </li>
  )
};