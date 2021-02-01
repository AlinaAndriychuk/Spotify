import React from 'react';
import './overview.sass';
import { LatestReleaze } from '../latest-release/latest-release';
import { Popular } from '../popular/popular';
import { TextButton } from '../../../../ui/text-button/text-button';
import { RelatedArtists } from '../related-artists/related-artists';
import { Album } from '../album/album';
import IosList from 'react-ionicons/lib/IosList';
import IosGrid from 'react-ionicons/lib/IosGrid';
import IosStopwatchOutline from 'react-ionicons/lib/IosStopwatchOutline';
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp';
import { Track } from '../track/track';

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

const trackSongs = [
  {value: 1, popularity: true, name: 'Intro', features: '', time: '1:11', added: true},
  {value: 2, popularity: true, name: 'Random', features: '', time: '3:00', added: true},
  {value: 3, popularity: true, name: 'Me, Myself & I -', features: 'Bebe Rexha', time: '4:11', added: true},
  {value: 4, popularity: false, name: 'One Of Them -', features: 'Big Sean', time: '3:20', added: true},
  {value: 5, popularity: true, name: 'Drifting -', features: 'Chris Brown, Tory Lanez', time: '4:33', added: true},
  {value: 6, popularity: true, name: 'Of All Things -', features: 'Too $hort', time: '3:34', added: true},
  {value: 7, popularity: true, name: 'Order More -', features: 'Starrah', time: '3:29', added: true},
  {value: 8, popularity: true, name: 'Calm Down', features: '', time: '2:07', added: true},
  {value: 9, popularity: true, name: "Don't Let Me Go -", features: 'Grace', time: '3:11', added: false},
  {value: 10, popularity: true, name: 'You Got Me', features: '', time: '3:28', added: true},
  {value: 11, popularity: true, name: 'What If -', features: 'Gizzle', time: '4:13', added: true},
  {value: 12, popularity: true, name: 'Sad Boy', features: '', time: '3:23', added: true},
  {value: 13, popularity: true, name: 'Some Kind Of Drug -', features: 'Marc E. Bassy', time: '3:42', added: true},
  {value: 14, popularity: true, name: 'Think About You -', features: 'Quin', time: '2:59', added: true},
  {value: 15, popularity: true, name: 'Everithing Will Be Ok -', features: 'Kehlani', time: '5:11', added: true},
  {value: 16, popularity: true, name: 'For This -', features: 'Iamnobodi', time: '4:11', added: true},
  {value: 17, popularity: true, name: 'Nothing to Me -', features: 'Keyshia Cole, E-40', time: '5:30', added: true},
];

export interface TrackOptions {
  value: number;
  popularity: boolean;
  name: string;
  features: string;
  time: string;
  added: boolean;
}

const releaseTitle = 'Drifting (Track Commentary)';
const releaseDate = '4 December 2015';
const releaseImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg';
const albumYear = 2015;
const albumName = "When It's Dark Out";
const albumImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg';

export const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__header">
        <div className="overview__artist-info">
          <p className="overview-title">
            latest release
          </p>
          <LatestReleaze title={releaseTitle} imageSrc={releaseImage} date={releaseDate}/>
          <p className="overview-title">
            popular
          </p>
          <Popular props={popularSongs}/>
          <TextButton fill="transparent" border="white-border" text="show 5 more"/>
        </div>
        <div className="overview__artists">
          <p className="overview-title">
            related artists
          </p>
          <RelatedArtists props={relatedArtists}/>
        </div>
      </div>
      <div className="overview__albums">
        <p className="overview-title">
          albums
        </p>
        <div className="overview__buttons">
          <IosList className="overview__view overview__view_active"/>
          <IosGrid className="overview__view overview__view_small"/>
        </div>
      </div>
      <Album year={albumYear} name={albumName} image={albumImage}/>
      <div className="overview__track">
        <p className="overview__track-number">
          #
        </p>
        <p className="overview-title">
          song
        </p>
        <div className="ovewview__buttons">
          <IosStopwatchOutline className="overview__track-time"/>
          <IosThumbsUp className="overview__track-popularity"/>
        </div>
      </div>
      <Track props={trackSongs}/>
    </div>
  )
};