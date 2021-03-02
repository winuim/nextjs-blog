import React from 'react';
import {render} from '../testUtils';
import SignUp from '../../templates/SignUp';

describe('Home page', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<SignUp />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
