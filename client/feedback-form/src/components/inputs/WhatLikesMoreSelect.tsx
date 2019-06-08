import { FormGroup, HTMLSelect } from '@blueprintjs/core';
import { IDictionaryItem } from 'app/businessObjects';
import { ServiceContext } from 'components/providers/ServiceProvider';
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

  const { dictionaryService } = React.useContext(ServiceContext);
  const [choices, setChoices] = React.useState<IDictionaryItem[]>([]);

  /**
   * On component mount load options
   */
  React.useEffect(() => {
    let didCancel = false;

    dictionaryService.getWhatLikesMoreDictionary()
      .then((c) => !didCancel && setChoices(c));

    return () => {
      didCancel = true;
    };

  }, [dictionaryService]);

  return <FormGroup label='What did you like more?' labelFor={id}>
    <HTMLSelect
      id={id}
      fill
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
    >
      {choices.map(x =>
        <option
          key={x.key}
          value={x.key}
          aria-selected={x.key === value}
        >
          {x.value}
        </option>)}
    </HTMLSelect>
  </FormGroup>;
};
