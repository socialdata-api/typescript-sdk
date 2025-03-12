// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from 'SocialData';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource twitter', () => {
  // skipped: tests are disabled for the time being
  test.skip('spaceRetrieve', async () => {
    const responsePromise = client.twitter.spaceRetrieve('1jMJgLdenVjxL');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('threadRetrieve', async () => {
    const responsePromise = client.twitter.threadRetrieve('thread_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('threadRetrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.threadRetrieve('thread_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('usersCreateByIDs: only required params', async () => {
    const responsePromise = client.twitter.usersCreateByIDs({ ids: ['44196397', '1319287761048723458'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('usersCreateByIDs: required and optional params', async () => {
    const response = await client.twitter.usersCreateByIDs({ ids: ['44196397', '1319287761048723458'] });
  });

  // skipped: tests are disabled for the time being
  test.skip('usersCreateByUsernames: only required params', async () => {
    const responsePromise = client.twitter.usersCreateByUsernames({ usernames: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('usersCreateByUsernames: required and optional params', async () => {
    const response = await client.twitter.usersCreateByUsernames({ usernames: ['string'] });
  });
});
