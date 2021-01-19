import React, {useRef} from 'react';
import classNames from 'classnames';
import { TabOption } from '../slider/slider';
import {Owerview} from '../owerview/owerview'
import './tabs.sass'

interface TabItemProps {
  active: boolean;
  options: TabOption;
  renderTab: (label: string) => string;
  switchTab: (value: TabOption) => void;
};

const TabItem: React.FunctionComponent<TabItemProps> = ({
  active,
  options,
  renderTab,
  switchTab,
}) => {
  const itemClass = classNames({"tabs__item": true, "tabs__item_active": active});

  return (
    <li className={itemClass} onClick={ () => switchTab(options) }>
      <p className="tabs__item-text">
        {renderTab(options.label)}
      </p>
    </li>
  )
}

interface TabProps {
  options: TabOption[];
  value: TabOption;
  renderTab: (label: string) => string;
  onChange: (value: TabOption) => void;
};

export const Tabs: React.FunctionComponent<TabProps> = ({
  options,
  value,
  renderTab,
  onChange,
}) => {
  const slider = useRef<HTMLDivElement>(null);
  const sliderPage = useRef<HTMLDivElement>(null);

  function switchTab(value) {
    const pageWidth = (sliderPage.current as HTMLDivElement).clientWidth; 
    (slider.current as HTMLDivElement).style.right = pageWidth * (value.value - 1) + "px";
  
    onChange(value);
  }
  
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {
          options.map( item => {
            return (
              <TabItem options={item} switchTab={switchTab} active={value.value === item.value} renderTab={renderTab} key={item.value}></TabItem>  
            )
          })
        }
      </ul>
      <div className="slider" ref={slider}>
        <div className="slider__page slider__page--green" ref={sliderPage}>
          <Owerview></Owerview>
        </div>
        <div className="slider__page slider__page--red">
          <h1 className="slider__title">
            Page 2
          </h1>
        </div>
      </div>
    </div>
  )
};