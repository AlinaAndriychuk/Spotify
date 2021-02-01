import React from 'react';
import IosRadioOutline from 'react-ionicons/lib/IosRadioOutline';
import IosContacts from 'react-ionicons/lib/IosContacts';
import IosBrowsers from 'react-ionicons/lib/IosBrowsers';

export const MainMenu = () => {
  return (
    <menu className="nav__list">
      <li className="nav__item">
        <a className="nav__link" href="./index.html">
          <IosBrowsers className="nav__item-icon"/>
          Browse
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="./index.html">
          <IosContacts className="nav__item-icon"/>
          Activity
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="./index.html">
          <IosRadioOutline className="nav__item-icon"/>
          Radio
        </a>
      </li>
    </menu>
  )
};