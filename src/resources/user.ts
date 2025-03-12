// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class User extends APIResource {
  /**
   * Used to set webhook URL that will be used for all monitors that don't have a
   * monitor-specific webhook_url set.
   */
  setGlobalWebhook(
    body: UserSetGlobalWebhookParams,
    options?: RequestOptions,
  ): APIPromise<UserSetGlobalWebhookResponse> {
    return this._client.post('/user/webhook', { body, ...options });
  }
}

export interface UserSetGlobalWebhookResponse {
  message?: string;

  status?: string;
}

export interface UserSetGlobalWebhookParams {
  /**
   * New webhook URL that will be used for all monitors that don't have an individual
   * webhook_url set
   */
  url: string | null;
}

export declare namespace User {
  export {
    type UserSetGlobalWebhookResponse as UserSetGlobalWebhookResponse,
    type UserSetGlobalWebhookParams as UserSetGlobalWebhookParams,
  };
}
