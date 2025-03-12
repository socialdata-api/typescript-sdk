// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from 'SocialData';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commentedBy', () => {
  // skipped: tests are disabled for the time being
  test.skip('verifyUser: only required params', async () => {
    const responsePromise = client.twitter.tweets.commentedBy.verifyUser('user_id', { tweet_id: 'tweet_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyUser: required and optional params', async () => {
    const response = await client.twitter.tweets.commentedBy.verifyUser('user_id', { tweet_id: 'tweet_id' });
  });
});
