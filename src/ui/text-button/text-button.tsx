import React from 'react';
import './text-button.sass';
import classNames from 'classnames';

export type TextButtonFill = 'green' | 'transparent';
export type TextButtonBorder = 'green-border' | 'white-border';

interface TextButtonProps {
  fill: TextButtonFill;
  border: TextButtonBorder;
  text: string;
};

export const TextButton: React.FunctionComponent<TextButtonProps> = ({
  fill,
  border,
  text,
}) => {
  const textButtonClass = classNames('text-button', {
    'text-button_green': fill === 'green',
    'text-button_transparent': fill === 'transparent',
    'text-button_green-border': border === 'green-border',
    'text-button_white-border': border === 'white-border',
  });

  return (
    <button className={textButtonClass}>
      {text}
    </button>
  )
};