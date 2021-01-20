import React from 'react';
import './owerview.sass';
import {LatestReleaze} from '../latest-release/latest-release';
import {OwerviewTitle} from '../owerview-title/owerview-title';
import {Popular} from '../popular/popular';
import {TextButton} from '../../../../ui/text-button/text-button';
import {RelatedArtists} from '../related-artists/related-artists';
import {Album} from '../album/album'
import IosList from 'react-ionicons/lib/IosList'
import IosGrid from 'react-ionicons/lib/IosGrid'


const popularImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg'];
const added = [true, false, true, false, true];
const songs = ['Me, Myself & I', 'I Mean It', 'Calm Down', 'Some Kind Of Drug', "Let's Get Lost"];
const plays = ['147,544, 165', '74,568,782', '13,737,506', '12,234,881', '40,882,954'];
const artistImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg'];
const artists = ['Hoodie Allen', 'Mike Stud', 'Drake', 'J. Cole', 'Big Sean', 'Wiz Khalifa', 'Yonas']

export const Owerview = () => {
   return (
    <div className="owerview">
      <div className="owerview__artist">
        <OwerviewTitle name="latest release"></OwerviewTitle>
        <LatestReleaze title="Drifting (Track Commentary)" date="4 December 2015" imageSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"></LatestReleaze>
        <OwerviewTitle name="popular"></OwerviewTitle>
        <Popular images={popularImages} plays={plays} names={songs} added={added}></Popular>
        <TextButton fill="transparent" border="white-border" text="show 5 more"></TextButton>
      </div>
      <div className="owerview__block">
        <OwerviewTitle name="related artists"></OwerviewTitle>
        <RelatedArtists images={artistImages} names={artists}></RelatedArtists>
      </div>
      <div className="owerview__albums">
        <OwerviewTitle name="albums"></OwerviewTitle>
        <div className="ovewview__buttons">
          <IosList className="owerview__view owerview__view_active"></IosList>
          <IosGrid className="owerview__view owerview__view_small"></IosGrid>
        </div>
      </div>
      <Album year={2015} name="When It's Dark Out" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg"></Album>
    </div>
  )
};