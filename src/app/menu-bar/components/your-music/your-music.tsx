import React, {useRef} from 'react';
import MdHeadset from 'react-ionicons/lib/MdHeadset';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosDocumentOutline from 'react-ionicons/lib/IosDocumentOutline';
import {MenuTitle} from '../menu-title/menu-title';

interface YourMusicProps {
  name: string;
};

export const YourMusic: React.FunctionComponent<YourMusicProps> = ({
  name,
}) => {
  const menu = useRef<HTMLMenuElement>(null);

  return (
    <div className="menu-bar__block">
      <MenuTitle name={name} menu={menu}></MenuTitle>
      <menu className="menu-bar__list" ref={menu}>
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <MdHeadset className="menu-bar__item-icon"></MdHeadset>
            Songs
          </a>
        </li>
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <IosMusicalNotes className="menu-bar__item-icon"></IosMusicalNotes>
            Albums
          </a>
        </li>
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <IosPerson className="menu-bar__item-icon"></IosPerson>
            Artists
          </a>
        </li>
        <li className="menu-bar__item">
          <a className="menu-bar__link" href="./index.html">
            <IosDocumentOutline className="menu-bar__item-icon"></IosDocumentOutline>
            Local Files
          </a>
        </li>
      </menu>
    </div>
  )
};