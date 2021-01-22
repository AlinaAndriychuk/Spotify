import React, {useRef} from 'react';
import IosRadioOutline from 'react-ionicons/lib/IosRadioOutline';
import IosContacts from 'react-ionicons/lib/IosContacts';
import IosBrowsers from 'react-ionicons/lib/IosBrowsers';
import {MenuTitle} from '../menu-title/menu-title';

interface MainMenuProps {
  name: string;
};

export const MainMenu: React.FunctionComponent<MainMenuProps> = ({
  name,
}) => {
  const menu = useRef<HTMLMenuElement>(null);

  return (
    <div className="menu-bar__blocK">
      <MenuTitle name={name} menu={menu}></MenuTitle>
      <menu className="menu-bar__list" ref={menu}>
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