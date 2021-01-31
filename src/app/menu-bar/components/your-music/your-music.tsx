import React, { useRef, useState } from 'react';
import MdHeadset from 'react-ionicons/lib/MdHeadset';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosDocumentOutline from 'react-ionicons/lib/IosDocumentOutline';
import {MenuTitle} from '../menu-title/menu-title';
import classNames from 'classnames';

interface YourMusicProps {
  name: string;
};

export const YourMusic: React.FunctionComponent<YourMusicProps> = ({
  name,
}) => {
  const menu = useRef<HTMLMenuElement>(null);
  const [menuState, setMenuState] = useState({
    menu: false,
    title: false,
  });
  
  const navListClass = classNames({
    "nav__list": true,
    "nav__list_open": menuState.title,
  });

  const changeMenuState = (value) => {
    setMenuState({
      menu: !menuState.menu,
      title: !menuState.title,
    })
  }

  return (
    <div className="nav">
      <MenuTitle name={name} menu={menu} onChange={changeMenuState} options={menuState}/>
      <menu className={navListClass} ref={menu}>
        <li className="nav__item">
          <a className="nav__link" href="./index.html">
            <MdHeadset className="nav__item-icon"/>
            Songs
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="./index.html">
            <IosMusicalNotes className="nav__item-icon"/>
            Albums
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="./index.html">
            <IosPerson className="nav__item-icon"/>
            Artists
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="./index.html">
            <IosDocumentOutline className="nav__item-icon"/>
            Local Files
          </a>
        </li>
      </menu>
    </div>
  )
};