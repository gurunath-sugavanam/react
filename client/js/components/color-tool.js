import React from 'react';

import { ToolHeader } from './tool-header';
import { ColorForm } from './color-form';

class ListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
    };

    //console.log('list item constructor: ' + props.item);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      item: nextProps.item,
    });
  }

  render() {

    return <li>props: {this.props.item}, state: {this.state.item}</li>;

  }

}


export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: [ ...props.colors ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        colors: [ ...this.props.colors.slice(0,2), ...this.props.colors.slice(3) ]
      });
    }, 4000);
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
        {this.state.colors.map( (color, index) => <ListItem key={index} item={color} />)}
      </ul>
      <ColorForm onSubmitColor={this.addColor} />
    </div>;
  }
}