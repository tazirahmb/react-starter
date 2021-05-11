import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button>Hello Guys</Button>).toJSON();

  expect(tree).toMatchSnapshot();
});
