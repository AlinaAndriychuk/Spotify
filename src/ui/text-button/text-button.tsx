import React from 'react';
import './text-button.sass';

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
   return (
    <button className={"text-button text-button_" + fill + " text-button_" + border}>
      {text}
    </button>
  )
};