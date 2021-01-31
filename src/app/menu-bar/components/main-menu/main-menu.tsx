import React, { useRef, useState } from 'react';
import IosRadioOutline from 'react-ionicons/lib/IosRadioOutline';
import IosContacts from 'react-ionicons/lib/IosContacts';
import IosBrowsers from 'react-ionicons/lib/IosBrowsers';
import {MenuTitle} from '../menu-title/menu-title';
import classNames from 'classnames';

interface MainMenuProps {
  name: string;
};

export const MainMenu: React.FunctionComponent<MainMenuProps> = ({
  name,
}) => {
  const menu = useRef<HTMLMenuElement>(null);
  const [opened, setOpened] = useState({
    menu: false,
    title: false,
  });

  const navListClass = classNames( 'nav__list', {'nav__list_open': opened.title});

  const changeMenuState = (value) => {
    setOpened({
      menu: !opened.menu,
      title: !opened.title,
    })
  }

  return (
    <nav className="nav">
      <MenuTitle name={name} menu={menu} onChange={changeMenuState} options={opened}/>
      <menu className={navListClass} ref={menu}>
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
    </nav>
  )
};