import React, { useState } from 'react';
import MdHeadset from 'react-ionicons/lib/MdHeadset';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosDocumentOutline from 'react-ionicons/lib/IosDocumentOutline';

export const YourMusic = () => {
  return (
    <menu className="nav__list">
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
  )
};