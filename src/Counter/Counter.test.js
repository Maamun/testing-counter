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
// TestSubtract

test('click on minus btn subtracts 1 to counter', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const subBTn = getByTestId(
    'substract-btn'
  );
  const counterel = getByTestId(
    'counter'
  );
  fireEvent.click(subBTn);
  expect(counterel.textContent).toBe(
    '-1'
  );
});
test('click on plus btn adds 1 to counter', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const addBTn = getByTestId('add-btn');
  const counterel = getByTestId(
    'counter'
  );
  fireEvent.click(addBTn);
  expect(counterel.textContent).toBe(
    '1'
  );
});
//  change input and test counter value
test('changing input value then clicking on add btn works correctly', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const addBTn = getByTestId('add-btn');
  const inputEl = getByTestId('input');
  const counterel = getByTestId(
    'counter'
  );
  fireEvent.change(inputEl, {
    target: {
      value: '6',
    },
  });
  fireEvent.click(addBTn);
  expect(counterel.textContent).toBe(
    '6'
  );
});

//  change input and test counter value
test('changing input value then clicking on sub btn works correctly', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const subBTn = getByTestId(
    'substract-btn'
  );
  const inputEl = getByTestId('input');
  const counterel = getByTestId(
    'counter'
  );
  fireEvent.change(inputEl, {
    target: {
      value: '3',
    },
  });
  fireEvent.click(subBTn);
  expect(counterel.textContent).toBe(
    '-3'
  );
});
//  classNames
test('counter contains correct classNames', () => {
  const { getByTestId } = render(
    <Counter />
  );
  const subBTn = getByTestId(
    'substract-btn'
  );
  const addBTn = getByTestId('add-btn');
  const inputEl = getByTestId('input');
  const counterel = getByTestId(
    'counter'
  );
  expect(counterel.className).toBe('');
  fireEvent.change(inputEl, {
    target: {
      value: '7',
    },
  });
  fireEvent.click(addBTn);
  expect(counterel.className).toBe(
    'positive'
  );
  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  });
  fireEvent.click(subBTn);
  fireEvent.click(subBTn);
  expect(counterel.className).toBe(
    'negative'
  );
});
