import React from 'react';
import {Search} from '../components/search/search';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import {User} from '../components/user/user';
import './top-bar-view.sass'

export const TopBar = () => {
   return (
    <div className="top-bar">
      <div className="top-bar__nav">
        <div className="top-bar__nav-buttons">
          <IosArrowBack className="top-bar__nav-arrow top-bar__nav-arrow_active"></IosArrowBack>
          <IosArrowForward className="top-bar__nav-arrow"></IosArrowForward>
        </div>
        <Search placeholder="Search"></Search>
      </div>
      <User userName="Adam Lowenthal" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg"></User>
    </div>
  )
}