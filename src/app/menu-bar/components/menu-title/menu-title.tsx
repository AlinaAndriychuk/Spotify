import React, {RefObject, useRef} from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import './menu-title.sass';

interface MenuTitleProps {
  name: string;
  menu: RefObject<HTMLMenuElement>;
};

export const MenuTitle: React.FunctionComponent<MenuTitleProps> = ({
  name,
  menu,
}) => {
  const title = useRef<HTMLParagraphElement>(null)

  const showMenu = () => {
    (menu.current as HTMLMenuElement).classList.toggle('menu-bar__list_open');
    (title.current as HTMLParagraphElement).classList.toggle('menu-bar__title_open');
  }

  return (
    <p className="menu-bar__title" onClick={showMenu} ref={title}>
      {name}
      <IosArrowDown className="menu-bar__title-icon"></IosArrowDown>
    </p>
  )
};