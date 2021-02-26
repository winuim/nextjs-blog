import React from 'react';
import {render, fireEvent} from '../testUtils';
import Home from '../../pages/home';
import {getSortedPostsData} from '../../lib/posts';

describe('Home page', () => {
  it('matches snapshot', () => {
    const allPostsData = getSortedPostsData();
    const {asFragment} = render(<Home allPostsData={allPostsData} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking button triggers alert', () => {
    const allPostsData = getSortedPostsData();
    const {getByText} = render(<Home allPostsData={allPostsData} />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText('Test Button'));
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  });
});
