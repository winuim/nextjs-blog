import {getSortedPostsData, getAllPostIds, getPostData} from '../../lib/posts';

describe('Posts component', () => {
  it('getSortedPostsData', () => {
    const sortedPostIds = getSortedPostsData();
    sortedPostIds.forEach(v => {
      expect(v).toHaveProperty('date');
      expect(v).toHaveProperty('title');
      expect(v).toHaveProperty('id');
    });
  });
  it('getAllPostIds', () => {
    const allPostIds = getAllPostIds();
    allPostIds.forEach(v => {
      expect(v).toHaveProperty('params');
      expect(v.params).toHaveProperty('id');
    });
  });
  it('getPostData', async () => {
    const postData = await getPostData('pre-rendering');
    expect(postData).toHaveProperty('date');
    expect(postData).toHaveProperty('title');
    expect(postData).toHaveProperty('id');
    expect(postData).toHaveProperty('contentHtml');
  });
});
