import React from 'react';
import './owerview-title.sass';

interface OwerviewTitleProps {
  name: string;
};

export const OwerviewTitle: React.FunctionComponent<OwerviewTitleProps> = ({
  name
}) => {
   return (
    <p className="owerview__title">
      {name}
    </p>
  )
};