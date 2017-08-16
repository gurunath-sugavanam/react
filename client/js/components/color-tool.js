import React from 'react';

import { ToolHeader } from './tool-header';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: [ ...props.colors ],
    };
  }

  addColor = newColor => {
    this.setState({
      colors: this.state.colors.concat(newColor),
    });
  }

  render() {

    return <div>
      <ToolHeader xheaderText={this.props.headerText} />
      <ul>
        {this.state.colors.map(color => <li>{color}</li>)}
      </ul>
      <ColorForm onSubmitColor={this.addColor} />
    </div>;
  }
}