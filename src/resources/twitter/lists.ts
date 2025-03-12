// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TwitterAPI from './twitter';
import * as UsersAPI from './users';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lists extends APIResource {
  /**
   * Retrieves detailed information about a Twitter List by its ID.
   */
  getList(listID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/twitter/list/${listID}`, options);
  }

  /**
   * Retrieves members of a Twitter List by its ID.
   */
  getListMembers(
    listID: string,
    query: ListGetListMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersAPI.UsersResponse> {
    return this._client.get(path`/twitter/list/${listID}/members`, { query, ...options });
  }

  /**
   * Retrieves tweets from a specific Twitter List by its ID.
   */
  getListTweets(
    listID: string,
    query: ListGetListTweetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/list/${listID}/tweets`, { query, ...options });
  }
}

/**
 * Twitter List details
 */
export type ListGetListResponse = unknown;

export interface ListGetListMembersParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export interface ListGetListTweetsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export declare namespace Lists {
  export {
    type ListGetListResponse as ListGetListResponse,
    type ListGetListMembersParams as ListGetListMembersParams,
    type ListGetListTweetsParams as ListGetListTweetsParams,
  };
}
