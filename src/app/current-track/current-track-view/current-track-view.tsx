import React from 'react';
import './current-track-view.sass';
import {TrackControls} from '../components/track-controls/track-controls'

const trackTime = '3:07';
const progressValue = 30;
const valume = 80

export const CurrentTrack = () => {
  return (
    <TrackControls progressValue={progressValue} time={trackTime} valume={valume}></TrackControls>
  )
};