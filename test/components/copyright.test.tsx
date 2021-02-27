import React from 'react';
import {render} from '../testUtils';
import Copyright from '../../components/copyright';

describe('Copyright component', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<Copyright />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
