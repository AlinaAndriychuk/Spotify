import React from 'react';
import './added-icon.sass';
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
  return (
    <>
      {
        (added) ? <MdCheckmark className={"added-icon added-icon_" + position}/> : <MdAdd className={"added-icon added-icon_" + position}></MdAdd>
      }
    </>
  )
};