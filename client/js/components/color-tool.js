import React from 'react';

export class ColorTool extends React.Component {
  render() {

    return <div>
      <header>
        <h1>{this.props.headerText}</h1>
      </header>
      <ul>
        {this.props.colors.map(color =>
          <li>{color}</li>
        )}
      </ul>
    </div>;
  }
}