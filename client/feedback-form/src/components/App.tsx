import { Router } from '@reach/router';
import React from 'react';
import styles from './App.module.scss';
import { Container } from './layout/Container';
import { Header } from './layout/Header';
import { IndexPage, indexRoute } from './pages/IndexPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SendFeedbackPage, sendFeedbackRoute } from './pages/SendFeedbackPage';

/**
 * Application Base Component
 */
export const App: React.FC = () => {

  return <>
    <Header />

    <Container className={styles.content}>
      <Router>
        <IndexPage path={indexRoute.template} />
        <SendFeedbackPage path={sendFeedbackRoute.template} />
        <NotFoundPage default />
      </Router>
    </Container>
  </>;
};
