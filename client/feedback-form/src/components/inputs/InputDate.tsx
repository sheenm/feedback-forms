import { FormGroup } from '@blueprintjs/core';
import { DateInput, IDateInputProps } from '@blueprintjs/datetime';
import React from 'react';

interface IProps extends Omit<IDateInputProps, 'popoverProps' | 'formatDate' | 'parseDate'> {
  label: string;
}

/**
 * Date Input with label
 */
export const InputDate: React.FC<IProps> = (props) => {

  return <FormGroup label={props.label} labelFor={props.inputProps && props.inputProps.id}>
    <DateInput {...props} popoverProps={{
      targetTagName: 'div',
      wrapperTagName: 'div'
    }}
      formatDate={(date) => date.toLocaleDateString()}
      parseDate={(str) => new Date(str)}
    />
  </FormGroup>;
};
