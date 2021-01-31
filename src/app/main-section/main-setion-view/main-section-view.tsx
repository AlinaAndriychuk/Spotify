import React from 'react';
import './main-section-view.sass';
import { ArtistBar } from '../components/artist-bar/artist-bar';
import { TabsView } from '../components/tabs-view/tabs-view'

export const MainSection = () => {
  return (
    <div className="main">
      <div className="main__content">
        <ArtistBar artistImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" artistBackground="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g-eazy.png" name="G-Easy" listeners="15,662,810" />
        <TabsView />
      </div>
    </div>
  )
};