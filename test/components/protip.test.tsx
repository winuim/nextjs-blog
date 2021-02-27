import React from 'react';
import {render} from '../testUtils';
import ProTip from '../../components/protip';

describe('Copyright component', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(<ProTip />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
