import React from 'react';
import { Search } from '../components/search/search';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import { User } from '../components/user/user';
import './top-bar-view.sass';

const userName = 'Adam Lowenthal';
const userImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg';

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__nav">
        <div className="top-bar__nav-buttons">
          <IosArrowBack className="top-bar__nav-arrow top-bar__nav-arrow_active" />
          <IosArrowForward className="top-bar__nav-arrow" />
        </div>
        <Search placeholder="Search" />
      </div>
      <User userName={userName} src={userImage} />
    </div>
  )
}