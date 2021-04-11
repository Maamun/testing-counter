import React from 'react';
import Counter from './Counter';
import {
  render,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// testing Header
test('Header should contain text', () => {
  const component = render(<Counter />);
  const headerel = component.getByTestId(
    'header'
  );
  expect(headerel.textContent).toBe(
    'My Counter'
  );
});

test('Counter Initially start with text of 0', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const counterel = getByTestId(
    'counter'
  );
  expect(counterel.textContent).toBe(
    '0'
  );
});
// Input contain value NOT text content

test('Input contains initial value of 1', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe('1');
  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  expect(inputEl.value).toBe('5');
});
