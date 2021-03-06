import React, { useState } from 'react';
import './user.sass';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import MdNotifications from 'react-ionicons/lib/MdNotifications';
import MdArchive from 'react-ionicons/lib/MdArchive';
import { UserMenu } from '../user-menu/user-menu';

interface UserProps {
  src: string;
  userName: string;
};

export const User: React.FunctionComponent<UserProps> = ({
  src,
  userName,
}) => {
  const [opened, setOpened] = useState(false)

  const changeMenuState = () => {
    setOpened(!opened)
  }

  return (
    <div className="user">
      <MdNotifications className="user__button" />
      <MdArchive className="user__button" />
      <div className="user__info">
        <img className="user__info-image" src={src} alt="Profile" />
        <span className="user__info-name">{userName}</span>
      </div>
      <IosArrowDown className="user__menu-button" onClick={changeMenuState} />
      {opened && <UserMenu />}
    </div>
  )
};