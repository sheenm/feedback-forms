import { RouteComponentProps } from '@reach/router';
import { IStaticRoute } from 'app/routes';
import { Feedbacks } from 'components/feedback/Feedbacks';
import React from 'react';

/**
 * Static Route to get to this page
 */
export const indexRoute: IStaticRoute = {
  template: '/',
  url: '/'
};

/**
 * Index Page where you can see feedbacks
 */
export const IndexPage: React.FC<RouteComponentProps> = () => {

  return <Feedbacks />;
};
