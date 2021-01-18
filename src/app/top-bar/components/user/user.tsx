import React from 'react';
import './user.sass';
import {ArrowButton} from '../../../../ui/arrow-button/arrow-button'

interface UserProps {
  src: string;
  userName: string;
};

export const User: React.FunctionComponent<UserProps> = ({
  src,
  userName,
}) => {

  return (
    <div className="user">
      <svg className="user__button" viewBox="0 0 16 20">
        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Rounded" transform="translate(-444.000000, -4100.000000)">
            <g id="Social" transform="translate(100.000000, 4044.000000)">
              <g id="-Round-/-Social-/-notifications" transform="translate(340.000000, 54.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path className="user__button-path" d="M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.89,22 12,22 Z M18,16 L18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4.71,17.29 C4.08,17.92 4.52,19 5.41,19 L18.58,19 C19.47,19 19.92,17.92 19.29,17.29 L18,16 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg className="user__button" viewBox="0 0 122.88 122.39">
        <g>
          <path className="user__button-path" d="M4.59,122.39h113.7c2.52,0,4.59-2.08,4.59-4.63l-0.11-36.56c-0.01-2.49-0.36-3.78-1.26-6.11l-17.93-61.16 c-0.81-2.12-1.86-4.12-4.12-4.12H85.71v14.66h6.5l16.19,53.89l0,0H84.5l-10.91,14.7H49.38l-11-14.7H14.3l16.87-53.89h6V9.8H24.22 c-2.27,0-3.28,2.02-4.12,4.12L1.15,75.86c-0.91,2.28-1,3.58-1.01,6.06L0,117.76C0,120.31,2.07,122.39,4.59,122.39L4.59,122.39 L4.59,122.39z M52.74,0h17.41v37.46h14L61.46,63.47L38.73,37.46h14V0L52.74,0L52.74,0z"/>
        </g>
      </svg>
      <div className="user__info">
        <img className="user__info-image" src={src} alt="Profile"/>
        <span className="user__info-name">{userName}</span>
      </div>
      <ArrowButton type="down" buttonStyle="active"></ArrowButton>
      <menu className="user__menu">
        <li className="user__menu-item">
          <a className="user__menu-link" href="/index.html">
            Private Session
          </a>
        </li>
        <li className="user__menu-item">
          <a className="user__menu-link" href="/index.html">
            Account
          </a>
        </li>
        <li className="user__menu-item">
          <a className="user__menu-link" href="/index.html">
            Setting
          </a>
        </li>
        <li className="user__menu-item">
          <a className="user__menu-link" href="/index.html">
            Log Out
          </a>
        </li>
      </menu>
    </div>
  )
};