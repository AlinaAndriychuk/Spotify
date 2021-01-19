import React from 'react';
import './popular-item.sass';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import IosAdd from 'react-ionicons/lib/IosAdd';

interface PopularItemProps {
  image: string;
  name: string;
  plays: string;
  added: boolean;
  number: number;
}

export const PopularItem: React.FunctionComponent<PopularItemProps> = ({
  image,
  name,
  plays,
  number,
  added,
}) => {
  const ChoseIcon = () => {
    if (added) {
      return <MdCheckmark className={"popular__checkmark popular__checkmark_added"}/>
    } else {
      return <IosAdd className={"popular__checkmark popular__checkmark_not-added"}></IosAdd>
    }
  }
  return (
    <React.Fragment>
      <img className="popular__item-icon" src={image} alt={name}/>
      <p className="popular__number">
        {number}
      </p>
      {
       ChoseIcon()
      }
      <p className="popular__song">
        {name}
      </p>
      <p className="popular__label">
        explicit
      </p>
      <p className="popular__plays">
        {plays}
      </p>
    </React.Fragment>
  )
};