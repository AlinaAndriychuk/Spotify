import React from 'react';
import './latest-release.sass';
import { OverviewTitle } from '../overview-title/overview-title';

interface LatestReleaseProps {
  imageSrc: string;
  title: string;
  date: string;
};

export const LatestReleaze: React.FunctionComponent<LatestReleaseProps> = ({
  imageSrc,
  title,
  date,
}) => {
   return (
    <div className="release">
      <img className="release__image" src={imageSrc} alt="release"/>
      <p className="release__title">
        {title}
      </p>
      <p className="release__date">
        {date}
      </p>
    </div>
  )
};