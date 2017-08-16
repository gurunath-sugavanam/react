import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = props => <header>
  <h1>{props.headerText}</h1>
</header>;

// export class ToolHeader extends React.Component {

  // static propTypes = {
  //   headerText: PropTypes.string.isRequired,
  // };

  // static defaultProps = {
  //   headerText: 'ES is amazing!',
  // };
  
//   render() {
//     return <header>
//       <h1>{this.props.headerText}</h1>
//     </header>;
//   }

// }

ToolHeader.propTypes = {
  headerText: PropTypes.string,
};

ToolHeader.defaultProps = {
  headerText: 'ES is amazing!',
};
