import { Radio, RadioGroup } from '@blueprintjs/core';
import { IDictionaryItem } from 'app/businessObjects';
import { ServiceContext } from 'components/providers/ServiceProvider';
import React from 'react';

interface IProps {
  value: number;
  onChange: (newValue: number) => void;
}

/**
 * Input for overall satisfiement
 */
export const OverallSatisfiementRadioInput: React.FC<IProps> = ({ value, onChange }) => {

  const { dictionaryService } = React.useContext(ServiceContext);
  const [inputElements, setInputElements] = React.useState<IDictionaryItem[]>([]);

  /**
   * Loads data on mount
   */
  React.useEffect(() => {
    let didCancel = false;

    dictionaryService.getOverallSatisfiementDictionary()
      .then(s => !didCancel && setInputElements(s));

    return () => {
      didCancel = true;
    };
  }, [dictionaryService]);

  return <RadioGroup
    onChange={(event: React.FormEvent) => onChange(Number((event.target as HTMLInputElement).value))}
    label='Overall satisfaction:'
    inline
    selectedValue={value}
  >
    {inputElements.map(x =>
      <Radio key={x.key} value={x.key} label={x.value} />)}
  </RadioGroup>;
};
