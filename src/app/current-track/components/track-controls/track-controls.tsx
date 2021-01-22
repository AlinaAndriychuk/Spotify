import React from 'react';
import "nouislider/distribute/nouislider.css";
import './track-controls.sass';
import MdPlay from 'react-ionicons/lib/MdPlay';
import IosSkipBackward from 'react-ionicons/lib/IosSkipBackward';
import IosSkipForward from 'react-ionicons/lib/IosSkipForward';
import IosMenu from 'react-ionicons/lib/IosMenu';
import IosShuffle from 'react-ionicons/lib/IosShuffle';
import MdRefresh from 'react-ionicons/lib/MdRefresh';
import IosPhonePortrait from 'react-ionicons/lib/IosPhonePortrait';
import IosVolumeUp from 'react-ionicons/lib/IosVolumeUp';
import Nouislider from "nouislider-react";


interface TrackControlsProps {
  time: string;
  progressValue: number;
  valume: number;
}

export const TrackControls: React.FunctionComponent<TrackControlsProps> = ({
  time,
  progressValue,
  valume,
}) => {
  return (
    <div className="track-controls">
      <div className="track-controls__actions">
        <IosSkipBackward className="track-controls__skip"></IosSkipBackward>
        <MdPlay className="track-controls__play"></MdPlay>
        <IosSkipForward className="track-controls__skip"></IosSkipForward>
      </div>
      <div className="track-controls__progress">
        <p className="track-controls__time">
          0:01
        </p>
        <Nouislider className="track-controls__progress-range" range={{ min: 0, max: 100 }} start={progressValue} connect={[true, false]}/>
        <p className="track-controls__time">
          {time}
        </p>
      </div>
      <div className="track-controls__tools">
        <p className="track-controls__lyrics">
          Lyrics
        </p>
        <IosMenu className="track-controls__menu"></IosMenu>
        <IosShuffle className="track-controls__shuffle"></IosShuffle>
        <MdRefresh className="track-controls__refresh"></MdRefresh>
        <a className="track-controls__device">
          <IosPhonePortrait className="track-controls__phone"></IosPhonePortrait>
          Devices available
        </a>
        <div className="track-controls__valume">
          <IosVolumeUp className="track-controls__valume-icon"></IosVolumeUp>
          <Nouislider className="track-controls__valume-range" range={{ min: 0, max: 100 }} start={valume} connect={[true, false]}/>
        </div>
      </div>
    </div>
  )
};