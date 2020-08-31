/**
 * Test the InputPage
 */

import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import InputPage from '../index';
import configureStore from '../../../configureStore';

const defaultProps = {
  stringInput: '',
  onInputChange: jest.fn(),
  onSubmitForm: jest.fn(),
  error: false,
  loading: false,
  complete: false,
  setErrors: jest.fn(),
};

describe('<InputPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    // const component = setup();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <InputPage {...defaultProps} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('Events', () => {
    it('should show a warning message if submitted input text is empty', async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <IntlProvider locale="en">
            <InputPage stringInput="blahaha" />
          </IntlProvider>
        </Provider>,
      );
      fireEvent.submit(getByTestId('form'));
      const label = await waitForElement(() => getByTestId('string-input'));
      expect(label).toHaveTextContent('You must have at least one character');
    });
  });
});
