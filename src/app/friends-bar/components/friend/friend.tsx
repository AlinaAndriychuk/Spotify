import React from 'react';
import './friend.sass';
import MdPerson from 'react-ionicons/lib/MdPerson'

interface FriendProps {
  name: string;
  link?: string;
};

export const Friend: React.FunctionComponent<FriendProps> = ({
  name,
  link,
}) => {
   return (
    <li className="friends-bar__item">
      <a className="friends-bar__link" href={link || "./index.html"}>
        <MdPerson className="friends-bar__icon"></MdPerson>
        {name}
      </a>
    </li>
  )
};