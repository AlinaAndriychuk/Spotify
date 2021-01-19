import React from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import MdHeadset from 'react-ionicons/lib/MdHeadset';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosDocumentOutline from 'react-ionicons/lib/IosDocumentOutline';

interface YourMusicProps {
  name: string;
};

export const YourMusic: React.FunctionComponent<YourMusicProps> = ({
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