import React from 'react';
import {render} from '../testUtils';
import Layout from '../../components/layout';

describe('Layout component', () => {
  it('matches snapshot', () => {
    const {asFragment} = render(
      <Layout>
        <span>test</span>
      </Layout>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('matches snapshot, home', () => {
    const {asFragment} = render(
      <Layout home>
        <span>test</span>
      </Layout>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
