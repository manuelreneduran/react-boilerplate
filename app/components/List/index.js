import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items && props.items.length > 0) {
    content = props.items.map((item, id) => (
      <ComponentToRender key={`item-${item + id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (
      <ComponentToRender item="You haven't added any strings yet - what are you waiting for?" />
    );
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
