// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SocialData from 'SocialData';

const client = new SocialData({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource monitors', () => {
  // skipped: tests are disabled for the time being
  test.skip('createPumpFunMonitor', async () => {
    const responsePromise = client.monitors.createPumpFunMonitor({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createUserFollowingMonitor', async () => {
    const responsePromise = client.monitors.createUserFollowingMonitor({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createUserProfileMonitor', async () => {
    const responsePromise = client.monitors.createUserProfileMonitor({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createUserTweetsMonitor', async () => {
    const responsePromise = client.monitors.createUserTweetsMonitor({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteMonitor', async () => {
    const responsePromise = client.monitors.deleteMonitor('01jeg76qa91b095gttamsbwa6q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listActiveMonitors', async () => {
    const responsePromise = client.monitors.listActiveMonitors();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listActiveMonitors: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.monitors.listActiveMonitors({ page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SocialData.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMonitorDetails', async () => {
    const responsePromise = client.monitors.retrieveMonitorDetails('01jeg76qa91b095gttamsbwa6q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateMonitorWebhook: only required params', async () => {
    const responsePromise = client.monitors.updateMonitorWebhook('01jeg76qa91b095gttamsbwa6q', {
      webhook_url: 'https://my-website.com/webhook',
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
  test.skip('updateMonitorWebhook: required and optional params', async () => {
    const response = await client.monitors.updateMonitorWebhook('01jeg76qa91b095gttamsbwa6q', {
      webhook_url: 'https://my-website.com/webhook',
    });
  });
});
