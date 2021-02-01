import React, { useRef, useState } from 'react';
import IosMusicalNotes from 'react-ionicons/lib/IosMusicalNotes';
import { MenuTitle } from '../menu-title/menu-title';
import classNames from 'classnames';
import { PlaylistsOptions } from '../../menu-bar-view/menu-bar-view';

interface PlaylistsProps {
  name: string;
  props: PlaylistsOptions[];
};

export const Playlists: React.FunctionComponent<PlaylistsProps> = ({
  name,
  props,
}) => {
  const menu = useRef<HTMLMenuElement>(null);
  const [opened, setOpened] = useState({
    menu: false,
    title: false,
  });

  const navListClass = classNames('nav__list', {'nav__list_open': opened.title});

  const changeMenuState = (value) => {
    setOpened({
      menu: !opened.menu,
      title: !opened.title,
    })
  }

  return (
    <div className="nav">
      <MenuTitle name={name} menu={menu} onChange={changeMenuState} options={opened}/>
      <menu className={navListClass} ref={menu}>
        {
          props.map( option => {
            return (
              <li className="nav__item" key={option.value}>
                <a className="nav__link" href="./index.html">
                  <IosMusicalNotes className="nav__item-icon"/>
                  {option.name}
                </a>
              </li>
            )
          })
        }
      </menu>
    </div>
  )
};