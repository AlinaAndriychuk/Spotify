import React, { RefObject } from 'react';
import './user-menu.sass';
import classNames from 'classnames';

interface UserMenuProps {
  menu: RefObject<HTMLMenuElement>;
  open: boolean;
};

export const UserMenu: React.FunctionComponent<UserMenuProps> = ({
  menu,
  open,
}) => {
  const userMenuClass = classNames('user-menu', {'user-menu_open': open});

  return (
    <menu className={userMenuClass} ref={menu}>
      <li className="user-menu__item">
        <a className="user-menu__link" href="/index.html">
          Private Session
        </a>
      </li>
      <li className="user-menu__item">
        <a className="user-menu__link" href="/index.html">
          Account
        </a>
      </li>
      <li className="user-menu__item">
        <a className="user-menu__link" href="/index.html">
          Setting
        </a>
      </li>
      <li className="user-menu__item">
        <a className="user-menu__link" href="/index.html">
          Log Out
        </a>
      </li>
    </menu>
  )
};