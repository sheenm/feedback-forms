import { Card, H4 } from '@blueprintjs/core';
import { IFeedback } from 'app/businessObjects';
import React from 'react';

/**
 * Component to display Feedbck
 */
export const FeedbackElement: React.FC<IFeedback> = (props) => {

  return <Card>
    <H4>{props.nickname}</H4>
    <p>Overall satisfaction: {props.overallSatisfaction}</p>
    <p>Liked more: {props.whatLikesMore}</p>
    <p>First date saw this: {props.firstDateSaw}</p>
  </Card>;
};
