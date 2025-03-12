// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from 'SocialData';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource following', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.twitter.user.following.list('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.following.list(
        'user_id',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyRelationship: only required params', async () => {
    const responsePromise = client.twitter.user.following.verifyRelationship('1729591119699124560', {
      source_user_id: '1729591119699124560',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyRelationship: required and optional params', async () => {
    const response = await client.twitter.user.following.verifyRelationship('1729591119699124560', {
      source_user_id: '1729591119699124560',
    });
  });
});
