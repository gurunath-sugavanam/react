import React from 'react';

export class ColorTool extends React.Component {
  render() {

    const colors = ['blue','pink','green','yellow','red','teal','black'];

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li>{color}</li>)}
      </ul>
    </div>;
  }
}