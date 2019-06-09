import { FormGroup, InputGroup } from '@blueprintjs/core';
import React from 'react';

interface IProps {
  changeFilter: (newValue: string) => void;
}

/**
 * Filter component to filter feedbacks by Likes More
 */
export const FeedbackFilter: React.FC<IProps> = ({ changeFilter }) => {

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    changeFilter(event.target.value);
  }, [changeFilter]);

  return <FormGroup label='Filter by Likes More:'>
    <InputGroup type='search' leftIcon='search' autoFocus onChange={onChange} />
  </FormGroup>;
};
