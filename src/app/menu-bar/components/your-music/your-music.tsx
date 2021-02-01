import React from 'react';
import MdHeadset from 'react-ionicons/lib/MdHeadset';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosDocumentOutline from 'react-ionicons/lib/IosDocumentOutline';

export const YourMusic = () => {
  return (
    <menu className="nav-list">
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <MdHeadset className="nav-list__item-icon" />
          Songs
        </a>
      </li>
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <IosMusicalNotes className="nav-list__item-icon" />
          Albums
        </a>
      </li>
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <IosPerson className="nav-list__item-icon" />
          Artists
        </a>
      </li>
      <li className="nav-list__item">
        <a className="nav-list__link" href="./index.html">
          <IosDocumentOutline className="nav-list__item-icon" />
          Local Files
        </a>
      </li>
    </menu>
  )
};