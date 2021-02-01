import React from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import IosArrowUp from 'react-ionicons/lib/IosArrowUp';
import './menu-title.sass';

interface MenuTitleProps {
  name: string;
  opened: boolean;
  onChange: () => void;
};

export const MenuTitle: React.FunctionComponent<MenuTitleProps> = ({
  name,
  opened,
  onChange,
}) => {
  return (
    <p className="nav-title" onClick={onChange}>
      {name}
      { (opened) ? <IosArrowDown className="nav-title__icon" /> : <IosArrowUp className="nav-title__icon" />}
    </p>
  )
};