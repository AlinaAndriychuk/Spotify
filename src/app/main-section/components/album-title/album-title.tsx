import React from 'react';
import './album-title.sass';
import IosList from 'react-ionicons/lib/IosList';
import IosGrid from 'react-ionicons/lib/IosGrid';
import { OverviewTitle } from '../overview-title/overview-title';

export const AlbumTitle = () => {
  return (
    <div className="album-title">
      <OverviewTitle name="albums"/>
      <div className="album-title__buttons">
        <IosList className="album-title__view album-title__view_active"/>
        <IosGrid className="album-title__view album-title__view_small"/>
      </div>
    </div>
  )
};