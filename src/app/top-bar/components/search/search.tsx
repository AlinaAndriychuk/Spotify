import React from 'react';
import './search.sass';

interface SearchProps {
  placeholder?: string;
};

export const Search: React.FunctionComponent<SearchProps> = ({
  placeholder
}) => {
   return (
    <input className="search" placeholder={placeholder}/>
  )
};