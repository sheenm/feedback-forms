import { FormGroup, HTMLInputProps, IInputGroupProps, InputGroup } from '@blueprintjs/core';
import React from 'react';

type InputGroupProps = IInputGroupProps & HTMLInputProps;

interface IProps extends InputGroupProps {
  label: string;
}

/**
 * Text Input Component with label
 */
export const InputText: React.FC<IProps> = (props) => {

  return <FormGroup label={props.label} labelFor={props.id}>
    <InputGroup {...props} />
  </FormGroup>;
};
