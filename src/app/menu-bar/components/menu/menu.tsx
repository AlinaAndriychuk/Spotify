import React, { ReactNode, useState } from 'react';
import {MenuTitle} from '../menu-title/menu-title';

interface MenuProps {
  name: string;
  children: ReactNode;
};

export const Menu: React.FunctionComponent<MenuProps> = ({
  name,
  children
}) => {
  const [opened, setOpened] = useState(true);

  const changeMenuState = () => {
    setOpened(!opened);
  }

  return (
    <nav className="nav">
      <MenuTitle name={name} opened={opened} onChange={changeMenuState}/>
      {opened && children}
    </nav>
  )
};