import { Button, Checkbox } from '@blueprintjs/core';
import { InputDate } from 'components/inputs/InputDate';
import { InputText } from 'components/inputs/InputText';
import { OverallSatisfiementRadioInput } from 'components/inputs/OverallSatisfiementRadioInput';
import { WhatLikesMoreSelect } from 'components/inputs/WhatLikesMoreSelect';
import { NotificationContext } from 'components/providers/NotificationProvider';
import { ServiceContext } from 'components/providers/ServiceProvider';
import React, { useReducer } from 'react';
import { feedbackFormReducer } from './FeedbackFormState';

/**
 * Feedback Form component
 */
export const FeedbackForm: React.FC = () => {
  const { feedbackService } = React.useContext(ServiceContext);
  const { showSuccess } = React.useContext(NotificationContext);

  const [state, dispatch] = useReducer(feedbackFormReducer, {
    email: '',
    firstDateSaw: undefined,
    isWantsReceiveNewsletter: true,
    nickname: '',
    overallSatisfaction: 0,
    whatLikesMore: 0
  });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state.firstDateSaw === undefined)
      return;

    await feedbackService.createFeedback({ ...state, firstDateSaw: state.firstDateSaw });

    showSuccess('Your feedback saved successfully');
    dispatch({ type: 'RESET' });
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: 'CHANGE_NICKNAME', nickname: event.target.value });

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: 'CHANGE_EMAIL', email: event.target.value });

  const changeReceiveNewsletter = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: 'CHANGE_RECEIVE_NEWSLETTER', isWantsReceiveNewsletter: event.target.checked });

  const changeWhatLikesMore = (whatLikesMore: number) =>
    dispatch({ type: 'CHANGE_WHAT_LIKES_MORE', whatLikesMore });

  const changeOverallSatisfaction = (overallSatisfaction: number) =>
    dispatch({ type: 'CHANGE_OVERALL_SATISFACTION', overallSatisfaction });

  const changeDate = (date: Date) => dispatch({ type: 'CHANGE_EVENTDATE', date });

  return <form onSubmit={submit}>
    <InputText
      id='nameInput'
      label='Your name:'
      type='text'
      required
      value={state.nickname}
      onChange={changeName}
    />

    <InputDate
      label='First Date saw this:'
      inputProps={{
        id: 'dateSawInput',
        required: true
      }}
      value={state.firstDateSaw}
      onChange={changeDate}
      maxDate={new Date()}
    />

    <OverallSatisfiementRadioInput
      value={state.overallSatisfaction}
      onChange={changeOverallSatisfaction}
    />

    <WhatLikesMoreSelect
      id='whatLikesMoreSelect'
      value={state.whatLikesMore}
      onChange={changeWhatLikesMore}
    />

    <InputText
      id='emailInput'
      label='Email:'
      type='email'
      required
      value={state.email}
      onChange={changeEmail}
    />

    <Checkbox
      id='wantsNewsletterCheckbox'
      label='Receive Newsletter'
      checked={state.isWantsReceiveNewsletter}
      onChange={changeReceiveNewsletter}
    />

    <Button type='submit' icon='send-to' text='Send feedback' />
  </form>;
};
