import React from 'react';
import './overview.sass';
import { LatestReleaze } from '../latest-release/latest-release';
import { OverviewTitle } from '../overview-title/overview-title';
import { Popular } from '../popular/popular';
import { TextButton } from '../../../../ui/text-button/text-button';
import { RelatedArtists } from '../related-artists/related-artists';
import { Album } from '../album/album';
import IosList from 'react-ionicons/lib/IosList';
import IosGrid from 'react-ionicons/lib/IosGrid';
import IosStopwatchOutline from 'react-ionicons/lib/IosStopwatchOutline';
import IosThumbsUp from 'react-ionicons/lib/IosThumbsUp';
import { Track } from '../track/track';

const popularImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg'];
const popularAdded = [true, false, true, false, true];
const popularSongs = ['Me, Myself & I', 'I Mean It', 'Calm Down', 'Some Kind Of Drug', "Let's Get Lost"];
const plays = ['147,544, 165', '74,568,782', '13,737,506', '12,234,881', '40,882,954'];
const artistImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg'];
const artists = ['Hoodie Allen', 'Mike Stud', 'Drake', 'J. Cole', 'Big Sean', 'Wiz Khalifa', 'Yonas'];
const trackAdded = [true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true];
const trackSongs = ['Intro', 'Random', 'Me, Myself & I -', 'One Of Them -', 'Drifting -', 'Of All Things -', 'Order More -', 'Calm Down', "Don't Let Me Go -", 'You Got Me', 'What If -', 'Sad Boy', 'Some Kind Of Drug -', 'Think About You -', 'Everithing Will Be Ok -', 'For This -', 'Nothing to Me -'];
const features = ['', '', 'Bebe Rexha', 'Big Sean', 'Chris Brown, Tory Lanez', 'Too $hort', 'Starrah', '', 'Grace', '', 'Gizzle', '', 'Marc E. Bassy', 'Quin', 'Kehlani', 'Iamnobodi', 'Keyshia Cole, E-40'];
const time = ['1:11', '3:00', '4:11', '3:20', '4:33', '3:34', '3:29', '2:07', '3:11', '3:28', '4:13', '3:23', '3:42', '2:59', '5:11', '4:11', '5:30'];
const popularity = [true, true, true, false, true, true, true, true, false, true, true, true, true, true, true, true, true];
const latestReleazeTitle = 'Drifting (Track Commentary)';
const latestReleazeDate = '4 December 2015';
const latestReleazeImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg';
const albumYear = 2015;
const albumName = "When It's Dark Out";
const albumImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg';

export const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__header">
        <div className="overview__artist-info">
          <OverviewTitle name="latest release"/>
          <LatestReleaze title={latestReleazeTitle} date={latestReleazeDate} imageSrc={latestReleazeImage}/>
          <OverviewTitle name="popular"/>
          <Popular images={popularImages} plays={plays} names={popularSongs} added={popularAdded}/>
          <TextButton fill="transparent" border="white-border" text="show 5 more"/>
        </div>
        <div className="overview__artists">
          <OverviewTitle name="related artists"/>
          <RelatedArtists images={artistImages} names={artists}/>
        </div>
      </div>
      <div className="overview__albums">
        <OverviewTitle name="albums"/>
        <div className="ovewview__buttons">
          <IosList className="overview__view overview__view_active"/>
          <IosGrid className="overview__view overview__view_small"/>
        </div>
      </div>
      <Album year={albumYear} name={albumName} image={albumImage}/>
      <div className="overview__track">
        <p className="overview__track-number">
          #
        </p>
        <OverviewTitle name="song"/>
        <div className="ovewview__buttons">
          <IosStopwatchOutline className="overview__track-time"/>
          <IosThumbsUp className="overview__track-popularity"/>
        </div>
      </div>
      <Track added={trackAdded} popularity={popularity} names={trackSongs} features={features} time={time}/>
    </div>
  )
};