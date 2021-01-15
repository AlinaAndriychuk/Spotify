import React from 'react';
import {Search} from '../components/search/search';
import {ArrowButton} from '../../../ui/arrow-button/arrow-button';
import {User} from '../components/user/user';
import './top-bar-view.sass'

export const TopBar = () => {
   return (
    <div className="top-bar">
      <div className="top-bar__nav">
        <div className="top-bar__nav-buttons">
          <ArrowButton buttonStyle="active" type="left"></ArrowButton>
          <ArrowButton buttonStyle="disabled" type="right"></ArrowButton>
        </div>
        <Search placeholder="Search"></Search>
      </div>
      <User userName="Adam Lowenthal" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg"></User>
    </div>
  )
}