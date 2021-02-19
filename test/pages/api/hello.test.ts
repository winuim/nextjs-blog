/* eslint-disable node/no-unpublished-import */
import {NextApiRequest, NextApiResponse} from 'next';
import httpMocks from 'node-mocks-http';
import {hello} from '../../../pages/api/hello';

describe('/api/hello handler', () => {
  test('responds 200 GET', async () => {
    const mockReq = httpMocks.createRequest<NextApiRequest>();
    const mockRes = httpMocks.createResponse<NextApiResponse>();
    await hello(mockReq, mockRes);
    expect(mockRes.statusCode).toEqual(200);
    expect(mockRes._getJSONData()).toEqual({text: 'Hello'});
  });
});
