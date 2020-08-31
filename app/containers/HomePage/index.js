/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import StringsList from '../../components/StringsList';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import reducer from '../App/reducer';
import { loadStrings } from '../App/actions';
import saga from './saga';
import messages from './messages';

const key = 'home';

function HomePage({ loading, error, strings, clickHandler }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  React.useEffect(() => {
    // submit the form to load strings
    clickHandler();
  }, []);

  const stringsListProps = {
    loading,
    error,
    strings,
  };

  return (
    <div>
      <Helmet>
        <title>Input Page</title>
        <meta name="description" content="A home page" />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <H3>
        <FormattedMessage {...messages.pageInfoMessage} />
      </H3>
      <div>
        <StringsList {...stringsListProps} />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  clickHandler: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    clickHandler: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStrings());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
