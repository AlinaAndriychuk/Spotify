import React from 'react';
import './latest-release.sass';

interface LatestReleazeProps {
  imageSrc: string;
  title: string;
  date: string;
};

export const LatestReleaze: React.FunctionComponent<LatestReleazeProps> = ({
  imageSrc,
  title,
  date,
}) => {
   return (
    <div className="release">
      <img className="releaze__image" src={imageSrc} alt="releaze"/>
      <p className="releaze__title">
        {title}
      </p>
      <p className="releaze__date">
        {date}
      </p>
    </div>
  )
};