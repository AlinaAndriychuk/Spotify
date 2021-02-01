import React from 'react';
import './overview-top.sass';
import { LatestReleaze } from '../latest-release/latest-release';
import { Popular } from '../popular/popular';
import { TextButton } from '../../../../ui/text-button/text-button';
import { RelatedArtists } from '../related-artists/related-artists';
import { OverviewTitle } from '../overview-title/overview-title';

const popularSongs = [
  {value: 1, name: 'Me, Myself & I', added: true, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', plays: '147,544, 165'},
  {value: 2, name: 'I Mean It', added: false, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', plays: '74,568,782'},
  {value: 3, name: 'Calm Down', added: true, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', plays: '13,737,506'},
  {value: 4, name: 'Some Kind Of Drug', added: false, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', plays: '12,234,881'},
  {value: 5, name: "Let's Get Lost", added: true, image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', plays: '40,882,954'},
];

export interface popularOptions {
  value: number,
  name: string,
  added: boolean,
  image: string,
  plays: string,
};

const relatedArtists = [
  {value: 1, name: 'Hoodie Allen', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg'},
  {value: 2, name: 'Mike Stud', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg'},
  {value: 3, name: 'Drake', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg'},
  {value: 4, name: 'J. Cole', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg'},
  {value: 5, name: 'Big Sean', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg'},
  {value: 6, name: 'Wiz Khalifa', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg'},
  {value: 7, name: 'Yonas', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg'},
];

export interface RelatedOptions {
  value: number,
  name: string,
  image: string
}

const releaseTitle = 'Drifting (Track Commentary)';
const releaseDate = '4 December 2015';
const releaseImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg';

export const OverviewTop = () => {
  return (
    <div className="overview-top">
      <div className="overview-top__artist-info">
        <OverviewTitle name="latest release"/>
        <LatestReleaze title={releaseTitle} imageSrc={releaseImage} date={releaseDate}/>
        <OverviewTitle name="popular"/>
        <Popular props={popularSongs}/>
        <TextButton fill="transparent" border="white-border" text="show 5 more"/>
      </div>
      <div className="overview-top__artists">
        <OverviewTitle name="related artists"/>
        <RelatedArtists props={relatedArtists}/>
      </div>
    </div>
  )
};