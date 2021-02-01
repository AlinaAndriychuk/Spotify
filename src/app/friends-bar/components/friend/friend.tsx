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
    <li className="friend">
      <a className="friend__link" href={link || "./index.html"}>
        <MdPerson className="friend__icon" />
        {name}
      </a>
    </li>
  )
};