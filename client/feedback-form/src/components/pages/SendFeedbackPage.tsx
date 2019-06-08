import { RouteComponentProps } from '@reach/router';
import { IStaticRoute } from 'app/routes';
import { FeedbackForm } from 'components/feedback/FeedbackForm';
import React from 'react';

/**
 * Static Route to get to this page
 */
export const sendFeedbackRoute: IStaticRoute = {
  url: 'send-feedback',
  template: 'send-feedback'
};

/**
 * Page where users can send their feedback
 */
export const SendFeedbackPage: React.FC<RouteComponentProps> = () => {

  return <FeedbackForm />;
};
