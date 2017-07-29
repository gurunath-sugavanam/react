import React from 'react';
import renderer from 'react-test-renderer';

import { HelloWorld } from './hello-world';

describe('hello world component tests', () => {

  test('render test', () => {

    const component = renderer.create(<HelloWorld />);
    expect(component).toMatchSnapshot();

  });

});