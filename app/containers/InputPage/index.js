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
import { axiosPost } from '../../utils/request';

export default function InputPage() {
  const addPost = () => {
    const options = {
      data: {
        string: 'tuple',
      },
    };

    axiosPost('/strings/add-one', options).then(res =>
      console.log('addPost response: ' + res),
    );
  };

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
      <button onClick={addPost}>Add post</button>
    </div>
  );
}
