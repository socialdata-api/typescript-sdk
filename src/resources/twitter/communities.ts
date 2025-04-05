// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TwitterAPI from './twitter';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Communities extends APIResource {
  /**
   * Returns array of users who are admins, moderators or regular members of a
   * community. Typically Twitter returns ~20 results per page. You can request
   * additional results by sending another request to the same endpoint using cursor
   * parameter.
   */
  getCommunityMembers(
    communityID: string,
    query: CommunityGetCommunityMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunityGetCommunityMembersResponse> {
    return this._client.get(path`/twitter/community/${communityID}/members`, { query, ...options });
  }

  /**
   * Returns array of tweets from the community timeline. Typically Twitter returns
   * ~20 results per page. You can request additional results by sending another
   * request to the same endpoint using cursor parameter. If the community has a
   * pinned post - this post will be returned on all subsequent requests made with
   * the cursor. This endpoint doesn't support any filters.
   */
  getCommunityTweets(
    communityID: string,
    query: CommunityGetCommunityTweetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/community/${communityID}/tweets`, { query, ...options });
  }
}

export type CommunityGetCommunityMembersResponse = Array<unknown>;

export interface CommunityGetCommunityMembersParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface CommunityGetCommunityTweetsParams {
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

export declare namespace Communities {
  export {
    type CommunityGetCommunityMembersResponse as CommunityGetCommunityMembersResponse,
    type CommunityGetCommunityMembersParams as CommunityGetCommunityMembersParams,
    type CommunityGetCommunityTweetsParams as CommunityGetCommunityTweetsParams,
  };
}
