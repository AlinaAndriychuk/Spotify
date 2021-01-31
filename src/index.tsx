import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css'
import './index.sass';
import {TopBar} from './app/top-bar/top-bar-view/top-bar-view';
import {FriendsBar} from './app/friends-bar/friends-bar-view/friends-bar-view';
import {MainSection} from './app/main-section/main-setion-view/main-section-view';
import {MenuBar} from './app/menu-bar/menu-bar-view/menu-bar-view';
import {CurrentTrack} from './app/current-track/current-track-view/current-track-view'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TopBar/>
    <MenuBar/>
    <FriendsBar/>
    <MainSection/>
    <CurrentTrack/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
