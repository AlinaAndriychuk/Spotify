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
      <svg width="16px" height="20px" viewBox="0 0 16 20" version="1.1">
        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Rounded" transform="translate(-444.000000, -4100.000000)">
            <g id="Social" transform="translate(100.000000, 4044.000000)">
              <g id="-Round-/-Social-/-notifications" transform="translate(340.000000, 54.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.89,22 12,22 Z M18,16 L18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4.71,17.29 C4.08,17.92 4.52,19 5.41,19 L18.58,19 C19.47,19 19.92,17.92 19.29,17.29 L18,16 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg version="1.1" fill="#000000">
        <g>
          <g>
            <path d="M479.6,663.3L255,377.5h122.5V50.8h245v326.7H745L520.4,663.3H479.6z M10,540.8L132.5,255h153.1v81.7h-91.9l-81.7,204.2h204.2c0,101.5,82.3,183.8,183.8,183.8s183.8-82.3,183.8-183.8h204.2l-81.7-204.2h-91.9V255h153.1L990,540.8v408.3H10V540.8z"/>
          </g>
        </g>
      </svg>
      <div className="user__info">
        <img src={src} alt="Profile"/>
        <span className="user__info-name">{userName}</span>
      </div>
      <ArrowButton type="down" buttonStyle="active"></ArrowButton>
      <menu className="user__menu">
        <li className="user__menu-item">
          <a href="/index.html">
            Private Session
          </a>
        </li>
        <li className="user__menu-item">
          <a href="/index.html">
            Account
          </a>
        </li>
        <li className="user__menu-item">
          <a href="/index.html">
            Setting
          </a>
        </li>
        <li className="user__menu-item">
          <a href="/index.html">
            Log Out
          </a>
        </li>
      </menu>
    </div>
  )
};