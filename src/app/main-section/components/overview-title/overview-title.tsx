import React from 'react';
import './overview-title.sass';

interface OverviewTitleProps {
  name: string;
};

export const OverviewTitle: React.FunctionComponent<OverviewTitleProps> = ({
  name
}) => {
  return (
    <p className="overview-title">
      {name}
    </p>
  )
};