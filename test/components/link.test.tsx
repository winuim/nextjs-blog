import React from 'react';
import {render} from '../testUtils';
import Link from '../../components/link';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Copyright component', () => {
  it('matches snapshot', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/home',
    }));
    const {asFragment} = render(<Link href="/home" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
