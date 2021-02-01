import React, { useState } from 'react';
import { Tabs } from '../tabs/tabs';
import { Overview } from '../overview/overview';
import { ArtistsPage } from '../related-artists-page/related-artists-page';
import './tabs-view.sass'

const options = [{ value: '1', label: 'overview' }, { value: '2', label: 'related artists' }];
const artistPageProps = [
  {value: 1, name: 'Hoodie Allen', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg'},
  {value: 2, name: 'Mike Stud', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg'},
  {value: 3, name: 'Drake', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg'},
  {value: 4, name: 'J. Cole', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg'},
  {value: 5, name: 'Big Sean', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg'},
  {value: 6, name: 'Wiz Khalifa', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg'},
  {value: 7, name: 'Yonas', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg'},
  {value: 8, name: 'Childish Gambino', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg'},
];

export interface ArtistOptions {
  name: string;
  image: string;
  value: number;
}

export interface TabOption {
  value: string;
  label: string;
}

enum Labels {
  Overview = 'overview',
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
      <Tabs options={options} value={value} renderTab={renderTab} onChange={handleOnChange}/>
      {value.label === Labels.Overview ? (<Overview/>) : (<ArtistsPage props={artistPageProps}/>)}
    </div>
  )
};