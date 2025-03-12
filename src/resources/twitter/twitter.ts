// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CommunityAPI from './community';
import {
  Community,
  CommunityListMembersParams,
  CommunityListMembersResponse,
  CommunityListTweetsParams,
} from './community';
import * as ListAPI from './list';
import { List, ListListMembersParams, ListListTweetsParams, ListRetrieveResponse } from './list';
import * as SearchResultsAPI from './search-results';
import { SearchResultRetrieveParams, SearchResults } from './search-results';
import * as TweetsAPI from './tweets/tweets';
import {
  Tweet,
  TweetListCommentsParams,
  TweetListQuotesParams,
  TweetRetrieveResponse,
  Tweets,
} from './tweets/tweets';
import * as UserAPI from './user/user';
import {
  Error,
  User,
  UserListAffiliatesParams,
  UserListFollowersParams,
  UserListHighlightsParams,
  UserListListsParams,
  UserListListsResponse,
  UserListMentionsParams,
  UserListTweetsAndRepliesParams,
  UserListTweetsParams,
  UserListVerifiedFollowersParams,
  UserResource,
  UserResponse,
  UserRetrieveExtendedBioResponse,
  UsersResponse,
} from './user/user';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Twitter extends APIResource {
  searchResults: SearchResultsAPI.SearchResults = new SearchResultsAPI.SearchResults(this._client);
  user: UserAPI.UserResource = new UserAPI.UserResource(this._client);
  tweets: TweetsAPI.Tweets = new TweetsAPI.Tweets(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);
  community: CommunityAPI.Community = new CommunityAPI.Community(this._client);

  /**
   * Retrieves detailed information about a Twitter Space by its ID.
   */
  spaceRetrieve(spaceID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/twitter/space/${spaceID}`, options);
  }

  /**
   * Returns an array of tweets associated with a thread and a next_cursor value used
   * to retrieve more pages (if the thread contains more than 30 posts).
   */
  threadRetrieve(
    threadID: string,
    query: TwitterThreadRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TweetsResponse> {
    return this._client.get(path`/twitter/thread/${threadID}`, { query, ...options });
  }

  /**
   * Retrieve user information for up to 100 Twitter users in a single request.
   */
  usersCreateByIDs(
    body: TwitterUsersCreateByIDsParams,
    options?: RequestOptions,
  ): APIPromise<UsersWithoutCursorResponse> {
    return this._client.post('/twitter/users-by-ids', { body, ...options });
  }

  /**
   * Retrieve user information for up to 100 Twitter users in a single request based
   * on array of usernames.
   */
  usersCreateByUsernames(
    body: TwitterUsersCreateByUsernamesParams,
    options?: RequestOptions,
  ): APIPromise<UsersWithoutCursorResponse> {
    return this._client.post('/twitter/users-by-usernames', { body, ...options });
  }
}

export type TweetsResponse = TweetsResponse.UnionMember0 | UserAPI.Error;

export namespace TweetsResponse {
  export interface UnionMember0 {
    /**
     * Cursor value used to obtain the subsequent page. To be passed to the same
     * endpoint as 'cursor' query parameter. Value may contain spaces and other special
     * characters and therefore must be url-encoded to avoid any errors
     */
    next_cursor: string;

    tweets: Array<TweetsAPI.Tweet>;
  }
}

export type UsersWithoutCursorResponse = UsersWithoutCursorResponse.Users | UserAPI.Error;

export namespace UsersWithoutCursorResponse {
  export interface Users {
    users: Array<UserAPI.User>;
  }
}

/**
 * Twitter Space details
 */
export type TwitterSpaceRetrieveResponse = unknown;

export interface TwitterThreadRetrieveParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface TwitterUsersCreateByIDsParams {
  /**
   * An array of Twitter user IDs. Up to 100 IDs per request. When using languages
   * where the user_id value exceeds the default Integer type limit (e.g.,
   * JavaScript), you should store user_id as a String. Use the id_str property
   * returned by the API for these values.
   */
  ids: Array<string>;
}

export interface TwitterUsersCreateByUsernamesParams {
  /**
   * An array of Twitter usernames. Up to 100 usernames per request.
   */
  usernames: Array<string>;
}

Twitter.SearchResults = SearchResults;
Twitter.UserResource = UserResource;
Twitter.Tweets = Tweets;
Twitter.List = List;
Twitter.Community = Community;

export declare namespace Twitter {
  export {
    type TweetsResponse as TweetsResponse,
    type UsersWithoutCursorResponse as UsersWithoutCursorResponse,
    type TwitterSpaceRetrieveResponse as TwitterSpaceRetrieveResponse,
    type TwitterThreadRetrieveParams as TwitterThreadRetrieveParams,
    type TwitterUsersCreateByIDsParams as TwitterUsersCreateByIDsParams,
    type TwitterUsersCreateByUsernamesParams as TwitterUsersCreateByUsernamesParams,
  };

  export { SearchResults as SearchResults, type SearchResultRetrieveParams as SearchResultRetrieveParams };

  export {
    UserResource as UserResource,
    type Error as Error,
    type User as User,
    type UserResponse as UserResponse,
    type UsersResponse as UsersResponse,
    type UserListListsResponse as UserListListsResponse,
    type UserRetrieveExtendedBioResponse as UserRetrieveExtendedBioResponse,
    type UserListAffiliatesParams as UserListAffiliatesParams,
    type UserListFollowersParams as UserListFollowersParams,
    type UserListHighlightsParams as UserListHighlightsParams,
    type UserListListsParams as UserListListsParams,
    type UserListMentionsParams as UserListMentionsParams,
    type UserListTweetsParams as UserListTweetsParams,
    type UserListTweetsAndRepliesParams as UserListTweetsAndRepliesParams,
    type UserListVerifiedFollowersParams as UserListVerifiedFollowersParams,
  };

  export {
    Tweets as Tweets,
    type Tweet as Tweet,
    type TweetRetrieveResponse as TweetRetrieveResponse,
    type TweetListCommentsParams as TweetListCommentsParams,
    type TweetListQuotesParams as TweetListQuotesParams,
  };

  export {
    List as List,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListListMembersParams as ListListMembersParams,
    type ListListTweetsParams as ListListTweetsParams,
  };

  export {
    Community as Community,
    type CommunityListMembersResponse as CommunityListMembersResponse,
    type CommunityListMembersParams as CommunityListMembersParams,
    type CommunityListTweetsParams as CommunityListTweetsParams,
  };
}
