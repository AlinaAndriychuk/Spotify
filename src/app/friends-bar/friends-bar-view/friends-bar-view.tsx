import React from 'react';
import './friends-bar-view.sass';
import { Friend } from '../components/friend/friend';
import { TextButton } from '../../../ui/text-button/text-button';

const friendNames = [
  { value: 1, name: 'Sam Smith' },
  { value: 2, name: 'Tarah Forsyth' },
  { value: 3, name: 'Richard Tomkins' },
  { value: 4, name: 'Tony Russo' },
  { value: 5, name: 'Alyssa Marist' },
  { value: 6, name: 'Ron Samson' }
];

export const FriendsBar = () => {
  return (
    <div className="friends-bar">
      <ul className="friends-bar__list">
        {
          friendNames.map(option => {
            return <Friend name={option.name} key={option.value} />
          })
        }
      </ul>
      <TextButton fill="transparent" text="find friends" border="white-border" />
    </div>
  )
};