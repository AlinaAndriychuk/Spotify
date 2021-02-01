import React from 'react';
import IosRadioOutline from 'react-ionicons/lib/IosRadioOutline';
import IosContacts from 'react-ionicons/lib/IosContacts';
import IosBrowsers from 'react-ionicons/lib/IosBrowsers';

export const MainMenu = () => {
  return (
    <menu className="nav-list">
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <IosBrowsers className="nav-list__item-icon" />
          Browse
        </a>
      </li>
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <IosContacts className="nav-list__item-icon" />
          Activity
        </a>
      </li>
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <IosRadioOutline className="nav-list__item-icon" />
          Radio
        </a>
      </li>
    </menu>
  )
};