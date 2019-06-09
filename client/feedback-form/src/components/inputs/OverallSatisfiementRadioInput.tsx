import { Radio, RadioGroup } from '@blueprintjs/core';
import { overallSatisfactionDictionary } from 'dictionaries/OverallSatisfactionDictionary';
import React from 'react';

interface IProps {
  value: number;
  onChange: (newValue: number) => void;
}

/**
 * Input for overall satisfiement
 */
export const OverallSatisfiementRadioInput: React.FC<IProps> = ({ value, onChange }) => {

  return <RadioGroup
    onChange={(event: React.FormEvent) => onChange(Number((event.target as HTMLInputElement).value))}
    label='Overall satisfaction:'
    inline
    selectedValue={value}
  >
    {[...overallSatisfactionDictionary.entries()].map(([key, title]) =>
      <Radio key={key} value={key} label={title} />)}
  </RadioGroup>;
};
