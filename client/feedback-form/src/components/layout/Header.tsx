import { Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { Link } from '@reach/router';
import { indexRoute } from 'components/pages/IndexPage';
import { sendFeedbackRoute } from 'components/pages/SendFeedbackPage';
import React from 'react';

/**
 * Header Bar of the app
 */
export const Header: React.FC = () => {

  return <Navbar>
    <NavbarGroup align='left'>
      <NavbarHeading>
        <Link to={indexRoute.url}>Feedbacks App</Link>
      </NavbarHeading>
      <NavbarDivider />
      <Link to={sendFeedbackRoute.url}>
        <Button
          text='Write feedback'
          icon='edit'
          minimal
        />
      </Link>
    </NavbarGroup>

  </Navbar>;
};
