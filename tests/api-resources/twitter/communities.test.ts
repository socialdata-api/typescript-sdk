// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from '@socialdata/sdk';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource communities', () => {
  // skipped: tests are disabled for the time being
  test.skip('getCommunityMembers', async () => {
    const responsePromise = client.twitter.communities.getCommunityMembers('1493446837214187523');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCommunityMembers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.communities.getCommunityMembers(
        '1493446837214187523',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCommunityTweets', async () => {
    const responsePromise = client.twitter.communities.getCommunityTweets('1493446837214187523');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCommunityTweets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.communities.getCommunityTweets(
        '1493446837214187523',
        { cursor: 'cursor', type: 'Latest' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });
});
