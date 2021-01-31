import React from 'react';
import './user-menu.sass';

export const UserMenu = () => {
  return (
    <menu className={'user-menu'}>
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