// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TwitterAPI from './twitter';
import * as UserAPI from './user/user';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class List extends APIResource {
  /**
   * Retrieves detailed information about a Twitter List by its ID.
   */
  retrieve(listID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/twitter/list/${listID}`, options);
  }

  /**
   * Retrieves members of a Twitter List by its ID.
   */
  listMembers(
    listID: string,
    query: ListListMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserAPI.UsersResponse> {
    return this._client.get(path`/twitter/list/${listID}/members`, { query, ...options });
  }

  /**
   * Retrieves tweets from a specific Twitter List by its ID.
   */
  listTweets(
    listID: string,
    query: ListListTweetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/list/${listID}/tweets`, { query, ...options });
  }
}

/**
 * Twitter List details
 */
export type ListRetrieveResponse = unknown;

export interface ListListMembersParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export interface ListListTweetsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export declare namespace List {
  export {
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListListMembersParams as ListListMembersParams,
    type ListListTweetsParams as ListListTweetsParams,
  };
}
