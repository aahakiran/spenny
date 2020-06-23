/*
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
    expenses: {
    id: `${scope}.expenses`,
    defaultMessage: 'Expenses',
  },
  cardBalance: {
    id: `${scope}.cardBalance`,
    defaultMessage: 'Card Balance',
  },
  spendingBreakdown: {
    id: `${scope}.spendingBreakdown`,
    defaultMessage: 'Speanding Breakdown',
  },
});
