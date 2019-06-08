import { H1 } from '@blueprintjs/core';
import { RouteComponentProps } from '@reach/router';
import React from 'react';

/**
 * This page will appear when a wrong url hit
 */
export const NotFoundPage: React.FC<RouteComponentProps> = () => {

  return <H1>
    404 - Not Found
  </H1>;
};
