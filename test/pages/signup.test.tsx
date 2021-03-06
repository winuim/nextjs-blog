import React from 'react';
import {render} from '../testUtils';
import SignUp from '../../pages/signup';

describe('Home page', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<SignUp />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
