import React from 'react';
import './overview.sass';
import { Album } from '../album/album';
import { Track } from '../track/track';
import { OverviewTop } from '../overview-top/overview-top';
import { AlbumTitle } from '../album-title/album-title'
import { TrackTitle } from '../track-title/track-title';

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

const albumYear = 2015;
const albumName = "When It's Dark Out";
const albumImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg';

export const Overview = () => {
  return (
    <div className="overview">
      <OverviewTop />
      <AlbumTitle />
      <Album year={albumYear} name={albumName} image={albumImage}/>
      <TrackTitle/>
      <Track props={trackSongs}/>
    </div>
  )
};