// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from 'SocialData';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource list', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.twitter.list.retrieve('list_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMembers', async () => {
    const responsePromise = client.twitter.list.listMembers('list_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMembers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.list.listMembers('list_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTweets', async () => {
    const responsePromise = client.twitter.list.listTweets('1625802236571033602');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTweets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.list.listTweets(
        '1625802236571033602',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });
});
