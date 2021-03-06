import React from 'react';
import PropTypes from 'prop-types';

import { BaseForm } from './base-form';

export class CarEditRow extends BaseForm {

  static propTypes = {
    onSaveCar: PropTypes.func.isRequired,
    onCancelCar: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    //this.state = Object.assign({}, props.car);
    this.state = { ...props.car };
  }

  componentDidMount() {
    if (this.makeInput) {
      this.makeInput.focus();
    }
  }

  saveCar = () => {
    this.props.onSaveCar(Object.assign({}, this.state));

    this.setState({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }
  
  render() {
    return <tr>
      <td>
        <input type="text" id="edit-make-input" name="make" 
          value={this.state.make} onChange={this.onChange}
          ref={ input => this.makeInput = input } />
      </td>
      <td>
        <input type="text" id="edit-model-input" name="model" 
          value={this.state.model} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-year-input" name="year" 
          value={this.state.year} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-color-input" name="color" 
          value={this.state.color} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-price-input" name="price" 
          value={this.state.price} onChange={this.onChange} />
      </td>
      <td>
        <button type="button" onClick={this.saveCar}>Save</button>
        <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
      </td>
    </tr>;
  }
}
