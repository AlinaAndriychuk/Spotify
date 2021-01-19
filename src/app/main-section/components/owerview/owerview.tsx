import React from 'react';
import './owerview.sass';
import {LatestReleaze} from '../latest-release/latest-release';
import {OwerviewTitle} from '../owerview-title/owerview-title';
import {Popular} from '../popular/popular'

const images = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg'];
const added = ['added', 'not-added', 'added', 'not-added', 'added'];
const songs = ['Me, Myself & I', 'I Mean It', 'Calm Down', 'Some Kind Of Drug', "Let's Get Lost"];
const plays = ['147,544, 165', '74,568,782', '13,737,506', '12,234,881', '40,882,954'];

export const Owerview = () => {
   return (
    <div className="owerview">
      <div className="owerview__artist">
        <OwerviewTitle name="latest release"></OwerviewTitle>
        <LatestReleaze title="Drifting (Track Commentary)" date="4 December 2015" imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"></LatestReleaze>
      </div>
      <div className="owerview__artist">
        <OwerviewTitle name="popular"></OwerviewTitle>
        <Popular images={images} plays={plays} names={songs} added={added}></Popular>
      </div>
    </div>
  )
};