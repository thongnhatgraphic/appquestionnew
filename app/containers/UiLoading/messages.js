/*
 * UiLoading Messages
 *
 * This contains all the text for the UiLoading container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.UiLoading';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the UiLoading container!',
  },
});
