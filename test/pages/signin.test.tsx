import React from 'react';
import {render} from '../testUtils';
import SignIn from '../../pages/signin';

describe('Home page', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<SignIn />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
