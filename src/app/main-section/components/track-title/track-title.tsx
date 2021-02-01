import React from 'react';
import './track-title.sass';
import IosStopwatchOutline from 'react-ionicons/lib/IosStopwatchOutline';
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp';
import { OverviewTitle } from '../overview-title/overview-title';

export const TrackTitle = () => {
  return (
    <div className="track-title">
      <p className="track-title__number">
        #
      </p>
      <OverviewTitle name="song" />
      <IosStopwatchOutline className="track-title__time" />
      <IosThumbsUp className="track-title__popularity" />
    </div>
  )
};