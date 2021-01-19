import React, {useState} from 'react';
import {Tabs} from '../tabs/tabs';

const options = [{ value: '1', label: 'owerview'}, { value: '2', label: 'related artists'}];

export interface TabOption {
  value: string;
  label: string;
}

export const Slider = () => {
  const [value, setValue] = useState(options[0]);

  const handleOnChange = value => {
    setValue(value);
  }
  
  const renderTab = label => {
    return label;
  };

  return (
    <Tabs options={options} value={value} renderTab={renderTab} onChange={handleOnChange}>
    </Tabs>
  )
};