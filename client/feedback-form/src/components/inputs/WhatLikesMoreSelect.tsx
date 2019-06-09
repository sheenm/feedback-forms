import { FormGroup, HTMLSelect } from '@blueprintjs/core';
import { whatLikesMoreDictionary } from 'dictionaries/WhatLikesMoreDictionary';
import React from 'react';

interface IProps {
  id: string;
  value: number;
  onChange: (newValue: number) => void;
}

/**
 * Component which contains all types of "What Likes More"
 */
export const WhatLikesMoreSelect: React.FC<IProps> = ({ id, value, onChange }) => {

  return <FormGroup label='What did you like more?' labelFor={id}>
    <HTMLSelect
      id={id}
      fill
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    >
      {[...whatLikesMoreDictionary.entries()].map(([key, title]) =>
        <option
          key={key}
          value={key}
          aria-selected={key === value}
        >
          {title}
        </option>)}
    </HTMLSelect>
  </FormGroup>;
};
