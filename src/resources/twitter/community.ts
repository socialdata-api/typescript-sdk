// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TwitterAPI from './twitter';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Community extends APIResource {
  /**
   * Returns array of users who are admins, moderators or regular members of a
   * community. Typically Twitter returns ~20 results per page. You can request
   * additional results by sending another request to the same endpoint using cursor
   * parameter.
   */
  listMembers(
    communityID: string,
    query: CommunityListMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunityListMembersResponse> {
    return this._client.get(path`/twitter/community/${communityID}/members`, { query, ...options });
  }

  /**
   * Returns array of tweets from the community timeline. Typically Twitter returns
   * ~20 results per page. You can request additional results by sending another
   * request to the same endpoint using cursor parameter. If the community has a
   * pinned post - this post will be returned on all subsequent requests made with
   * the cursor. This endpoint doesn't support any filters.
   */
  listTweets(
    communityID: string,
    query: CommunityListTweetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/community/${communityID}/tweets`, { query, ...options });
  }
}

export type CommunityListMembersResponse = Array<unknown>;

export interface CommunityListMembersParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface CommunityListTweetsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;

  /**
   * Search type (Latest for recent tweets or Top for popular tweets). Default -
   * Latest.
   */
  type?: 'Latest' | 'Top';
}

export declare namespace Community {
  export {
    type CommunityListMembersResponse as CommunityListMembersResponse,
    type CommunityListMembersParams as CommunityListMembersParams,
    type CommunityListTweetsParams as CommunityListTweetsParams,
  };
}
