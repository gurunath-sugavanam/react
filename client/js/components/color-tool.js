import React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.value,
    });
  }

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
      <form>
        <div>
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange}  />
        </div>
      </form>
    </div>;
  }
}