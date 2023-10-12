import { render, screen, fireEvent } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals';
import '@testing-library/jest-dom'
import Home from '../src/app/page';

test('click on the span-1 changes the state', () => {
  render(<Home />);
  const loginForm = screen.getByTestId("loginForm")
  expect(loginForm).toBeInTheDocument()
  const mySpanOne = screen.getByTestId("span-1")
  fireEvent.click(mySpanOne)
  const createAccountForm = screen.getByTestId("createAccountForm")
  expect(createAccountForm).toBeInTheDocument()
});