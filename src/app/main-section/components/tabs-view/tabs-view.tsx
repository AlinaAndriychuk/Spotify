import React, { useState } from 'react';
import { Tabs } from '../tabs/tabs';
import { Owerview } from '../owerview/owerview';
import { ArtistsPage } from '../related-artists-page/related-artists-page';
import './tabs-view.sass'

const options = [{ value: '1', label: 'owerview' }, { value: '2', label: 'related artists' }];
const artistsPageImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg'];
const artistsPageNames = ['Hoodie Allen', 'Mike Stud', 'Drake', 'J. Cole', 'Big Sean', 'Wiz Khalifa', 'Yonas', 'Childish Gambino'];

export interface TabOption {
  value: string;
  label: string;
}

enum Labels {
  Owerview = 'owerview',
  RelatedArtists = 'related artists'
}

export const TabsView = () => {
  const [value, setValue] = useState(options[0]);

  const handleOnChange = value => {
    setValue(value);
  }

  const renderTab = label => {
    return label;
  };

  return (
    <div className="tabs-view">
      <Tabs options={options} value={value} renderTab={renderTab} onChange={handleOnChange}>
      </Tabs>
      {value.label === Labels.Owerview ? (<Owerview/>) : (<ArtistsPage names={artistsPageNames} images={artistsPageImages}></ArtistsPage>)}
    </div>
  )
};