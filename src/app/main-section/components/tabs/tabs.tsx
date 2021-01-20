import React from 'react';
import classNames from 'classnames';
import { TabOption } from '../tabs-view/tabs-view';
import './tabs.sass';

interface TabItemProps {
  active: boolean;
  options: TabOption;
  renderTab: (label: string) => string;
  onChange: (value: TabOption) => void;
};

const TabItem: React.FunctionComponent<TabItemProps> = ({
  active,
  options,
  renderTab,
  onChange,
}) => {
  const itemClass = classNames({"tabs__item": true, "tabs__item_active": active});

  return (
    <li className={itemClass} onClick={ () => onChange(options) }>
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
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {
          options.map( item => {
            return (
              <TabItem options={item} onChange={onChange} active={value.value === item.value} renderTab={renderTab} key={item.value}></TabItem>  
            )
          })
        }
      </ul>
    </div>
  )
};