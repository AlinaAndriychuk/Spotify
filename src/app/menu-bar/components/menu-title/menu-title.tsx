import React, { RefObject, useRef } from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import './menu-title.sass';
import classNames from 'classnames';

export interface MenuOption {
  menu: boolean;
  title: boolean;
};

interface MenuTitleProps {
  name: string;
  menu: RefObject<HTMLMenuElement>;
  options: MenuOption;
  onChange: (value: MenuOption) => void;
};

export const MenuTitle: React.FunctionComponent<MenuTitleProps> = ({
  name,
  menu,
  options,
  onChange,
}) => {
  const title = useRef<HTMLParagraphElement>(null);
  const titleClass = classNames('nav-title', {'nav-title_open': options.title});

  return (
    <p className={titleClass} onClick={() => onChange(options)} ref={title}>
      {name}
      <IosArrowDown className="nav-title__icon"/>
    </p>
  )
};