/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Input Page</title>
        <meta name="description" content="A home page" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <h3>
        <FormattedMessage {...messages.pageInfoMessage} />
      </h3>
    </div>
  );
}
