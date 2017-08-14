import React from 'react';

export class ColorTool extends React.Component {
  render() {

    const colors = ['blue','pink','green','yellow','red','teal','black'];

    const boldListItem = { fontWeight: 'bold' };

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li className="artem" style={boldListItem}>{color}</li>
        )}
      </ul>
    </div>;
  }
}