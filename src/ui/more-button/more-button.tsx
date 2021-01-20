import React from 'react';
import './more-button.sass';
import IosMore from 'react-ionicons/lib/IosMore';

export type ButtonSize = 'small' | 'big';

interface MoreButtonProps {
  size: ButtonSize;
}

export const MoreButton: React.FunctionComponent<MoreButtonProps> = ({
  size,
}) => {
   return (
    <IosMore className={"more-button more-button_" + size}></IosMore>
  )
};