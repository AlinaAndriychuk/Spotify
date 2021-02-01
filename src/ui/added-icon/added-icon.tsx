import React from 'react';
import './added-icon.sass';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import MdAdd from 'react-ionicons/lib/MdAdd';

interface AddedIconProps {
  added: boolean;
}

export const AddedIcon: React.FunctionComponent<AddedIconProps> = ({
  added,
}) => {
  return (
    <>
      {
        (added) ? <MdCheckmark className="added-icon" /> : <MdAdd className="added-icon" />
      }
    </>
  )
};