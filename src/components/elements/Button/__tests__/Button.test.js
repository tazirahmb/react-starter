import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

it('renders correctly', () => {
  const { container } = render(<Button>Hello Guys</Button>);

  expect(container.firstChild.innerHTML).toMatch(/hello guys/i);
});
