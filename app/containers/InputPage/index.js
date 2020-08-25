/*
 * InputPage
 *
 * This page allows users to input a string and send to server
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function InputPage() {
  return (
    <div>
      <Helmet>
        <title>Input Page</title>
        <meta name="description" content="An input page" />
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
