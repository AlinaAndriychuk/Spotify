import React from 'react';
import './added-icon.sass';
import classNames from 'classnames';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import MdAdd from 'react-ionicons/lib/MdAdd';

export type AddedIconPosition = 'left' | 'right';

interface AddedIconProps {
  added: boolean;
  position: AddedIconPosition;
}

export const AddedIcon: React.FunctionComponent<AddedIconProps> = ({
  added,
  position,
}) => {
  const addedIconClass = classNames({
    "added-icon": true,
    "added-icon_left": position === "left",
    "added-icon_right": position === "right"
  });

  return (
    <>
      {
        (added) ? <MdCheckmark className={addedIconClass}/> : <MdAdd className={addedIconClass}/>
      }
    </>
  )
};