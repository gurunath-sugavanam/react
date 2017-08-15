import React from 'react';

import { ToolHeader } from './tool-header';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
      colors: [ ...props.colors ],
    };
  }

  onChange = e => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.value,
    });
  }

  onClick = () => {
    this.setState({
      colors: this.state.colors.concat(this.state.newColor),
      newColor: '',
    });
  }

  render() {

    return <div>
      <ToolHeader headerText={this.props.headerText} />
      <ul>
        {this.state.colors.map(color =>
          <li>{color}</li>
        )}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange}  />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }
}