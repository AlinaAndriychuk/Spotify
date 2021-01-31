import React from 'react';
import './more-button.sass';
import IosMore from 'react-ionicons/lib/IosMore';
import classNames from 'classnames';

export type ButtonSize = 'small' | 'big';

interface MoreButtonProps {
  size: ButtonSize;
}

export const MoreButton: React.FunctionComponent<MoreButtonProps> = ({
  size,
}) => {
  const moreButtonClass = classNames('more-button', {
    'more-button_small': size === 'small',
    'more-button_big': size === 'big',
  });

  return (
    <IosMore className={moreButtonClass}/>
  )
};