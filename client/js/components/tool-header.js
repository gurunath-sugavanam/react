import React from 'react';

export const ToolHeader = props => {
  
  const headerTextUpperCase = props.headerText.toUpperCase();

  return <header>
    <h1>{headerTextUpperCase}</h1>
  </header>;
};

// export class ToolHeader extends React.Component {
  
//     render() {
//       return <header>
//         <h1>{this.props.headerText}</h1>
//       </header>;
//     }
  
//   }