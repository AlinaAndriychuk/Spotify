import React from 'react';
import './owerview.sass';
import {LatestReleaze} from '../latest-release/latest-release';
import {OwerviewTitle} from '../owerview-title/owerview-title'

export const Owerview = () => {
   return (
    <div className="owerview">
      <div className="owerview__block">
        <OwerviewTitle name="latest release"></OwerviewTitle>
        <LatestReleaze title="Drifting (Track Commentary)" date="4 December 2015" imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"></LatestReleaze>
      </div>
    </div>
  )
};