// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from 'SocialData';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  // skipped: tests are disabled for the time being
  test.skip('listAffiliates', async () => {
    const responsePromise = client.twitter.user.listAffiliates('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAffiliates: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listAffiliates(
        'user_id',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFollowers', async () => {
    const responsePromise = client.twitter.user.listFollowers('1625802236571033602');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFollowers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listFollowers(
        '1625802236571033602',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listHighlights', async () => {
    const responsePromise = client.twitter.user.listHighlights('1729591119699124560');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listHighlights: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listHighlights(
        '1729591119699124560',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLists', async () => {
    const responsePromise = client.twitter.user.listLists('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listLists: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listLists('user_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMentions', async () => {
    const responsePromise = client.twitter.user.listMentions('elonmusk');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMentions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listMentions(
        'elonmusk',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTweets', async () => {
    const responsePromise = client.twitter.user.listTweets('user_id');
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
      client.twitter.user.listTweets('user_id', { cursor: 'cursor' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTweetsAndReplies', async () => {
    const responsePromise = client.twitter.user.listTweetsAndReplies('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTweetsAndReplies: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listTweetsAndReplies(
        'user_id',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVerifiedFollowers', async () => {
    const responsePromise = client.twitter.user.listVerifiedFollowers('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVerifiedFollowers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.twitter.user.listVerifiedFollowers(
        'user_id',
        { cursor: 'cursor' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByID', async () => {
    const responsePromise = client.twitter.user.retrieveByID('user_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByUsername', async () => {
    const responsePromise = client.twitter.user.retrieveByUsername('elonmusk');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveExtendedBio', async () => {
    const responsePromise = client.twitter.user.retrieveExtendedBio('elonmusk');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
