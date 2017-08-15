import React from 'react';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };
  }

  onChange = e => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.value,
    });
  }
  
  submitColor = () => {
    this.props.onSubmitColor(this.state.newColor);

    this.setState({
      newColor: '',
    });
  }

  render() {
    return <form>
      <div>
        <label htmlFor="new-color-input">New Color:</label>
        <input type="text" id="new-color-input" name="newColor"
          value={this.state.newColor} onChange={this.onChange}  />
      </div>
      <button type="button" onClick={this.submitColor}>Submit Color</button>
    </form>;
  }
}