/*
 * Input Page Messages
 *
 * This contains all the text for the InputPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.InputPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Input Page',
  },
  pageInfoMessage: {
    id: `${scope}.pageInfoMessage`,
    defaultMessage: 'Write something and send it to the server!',
  },
});
