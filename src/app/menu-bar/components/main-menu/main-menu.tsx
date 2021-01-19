import React from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import IosRadioOutline from 'react-ionicons/lib/IosRadioOutline';
import IosContacts from 'react-ionicons/lib/IosContacts';
import IosBrowsers from 'react-ionicons/lib/IosBrowsers';

interface MainMenuProps {
  name: string;
};

export const MainMenu: React.FunctionComponent<MainMenuProps> = ({
  name,
}) => {
   return (
    <div className="menu-bar__blocK">
      <p className="menu-bar__title">
        {name}
        <IosArrowDown className="menu-bar__title-icon"></IosArrowDown>
      </p>
      <menu className="menu-bar__list">
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <IosBrowsers className="menu-bar__item-icon"></IosBrowsers>
            Browse
          </a>
        </li>
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <IosContacts className="menu-bar__item-icon"></IosContacts>
            Activity
          </a>
        </li>
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <IosRadioOutline className="menu-bar__item-icon"></IosRadioOutline>
            Radio
          </a>
        </li>
      </menu>
    </div>
  )
};