import React from 'react';
import './friends-bar-view.sass';
import {Friend} from '../components/friend/friend';
import {TextButton} from '../../../ui/text-button/text-button';

const friendNames = ['Sam Smith', 'Tarah Forsyth', 'Richard Tomkins', 'Tony Russo', 'Alyssa Marist', 'Ron Samson'];

export const FriendsBar = () => {
   return (
    <div className="friends-bar">
      <ul className="friends-bar__list">
        {
          friendNames.map( (name, index) => {
            return <Friend name={name} key={index}></Friend>
          }) 
        }
      </ul>
      <TextButton fill="transparent" text="find friends" border="white-border"></TextButton>
    </div>
  )
};