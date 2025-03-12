// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UserAPI from './user';
import * as TwitterAPI from '../twitter';
import * as FollowingAPI from './following';
import {
  Following,
  FollowingListParams,
  FollowingVerifyRelationshipParams,
  FollowingVerifyRelationshipResponse,
} from './following';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class UserResource extends APIResource {
  following: FollowingAPI.Following = new FollowingAPI.Following(this._client);

  /**
   * Verified organization profiles (i.e. users with the gold checkmark) occasionally
   * have affiliated accounts listed under "Affiliates" tab on their profile page.
   * The endpoint returns an array of user profiles affiliated with this
   * organization.
   */
  listAffiliates(
    userID: string,
    query: UserListAffiliatesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersResponse> {
    return this._client.get(path`/twitter/user/${userID}/affiliates`, { query, ...options });
  }

  /**
   * Returns an array of user profiles that are following the target profile
   * identified by user_id. The profiles are returned in reverse chronological order,
   * with the most recent followers appearing on the first page.
   */
  listFollowers(
    userID: string,
    query: UserListFollowersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersResponse> {
    return this._client.get(path`/twitter/user/${userID}/followers`, { query, ...options });
  }

  /**
   * Returns array of tweets from the user's Highlights tab. Typically Twitter
   * returns ~20 results per page. You can request additional results by sending
   * another request to the same endpoint using cursor parameter.
   */
  listHighlights(
    userID: string,
    query: UserListHighlightsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/user/${userID}/highlights`, { query, ...options });
  }

  /**
   * Returns array of lists a user created or is subscribed to. Typically Twitter
   * returns up to 100 lists per page. You can request additional results by sending
   * another request to the same endpoint using cursor parameter.
   */
  listLists(
    userID: string,
    query: UserListListsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListListsResponse> {
    return this._client.get(path`/twitter/user/${userID}/lists`, { query, ...options });
  }

  /**
   * Retrieves tweets that mention the specified Twitter user. Typically returns ~20
   * results per page. You can request additional results by sending another request
   * to the same endpoint using cursor parameter.
   */
  listMentions(
    username: string,
    query: UserListMentionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/user/${username}/mentions`, { query, ...options });
  }

  /**
   * Returns array of tweets from the user's tweets timeline. Typically Twitter
   * returns ~20 results per page. You can request additional search results by
   * sending another request to the same endpoint using cursor parameter.
   * The endpoint only works with profiles that are 'public' and will fail to
   * retrieve tweets for profiles with 'protected' privacy setting.
   */
  listTweets(
    userID: string,
    query: UserListTweetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/user/${userID}/tweets`, { query, ...options });
  }

  /**
   * Returns array of tweets from the user's tweets and replies timeline, including
   * both original tweets and replies. Typically Twitter returns ~20 results per
   * page. You can request additional search results by sending another request to
   * the same endpoint using cursor parameter.
   * The endpoint only works with profiles that are 'public' and will fail to
   * retrieve tweets for profiles with 'protected' privacy setting.
   */
  listTweetsAndReplies(
    userID: string,
    query: UserListTweetsAndRepliesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/user/${userID}/tweets-and-replies`, { query, ...options });
  }

  /**
   * Returns an array of verified user profiles that are following the target profile
   * identified by user_id. The profiles are returned in reverse chronological order,
   * with the most recent followers appearing on the first page.
   */
  listVerifiedFollowers(
    userID: string,
    query: UserListVerifiedFollowersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersResponse> {
    return this._client.get(path`/twitter/user/${userID}/verified-followers`, { query, ...options });
  }

  /**
   * Retrieve detailed user profile information by their Twitter numerical ID.
   */
  retrieveByID(userID: string, options?: RequestOptions): APIPromise<UserResponse> {
    return this._client.get(path`/twitter/user/${userID}`, options);
  }

  /**
   * Retrieve detailed user information by their Twitter username.
   */
  retrieveByUsername(username: string, options?: RequestOptions): APIPromise<UserResponse> {
    return this._client.get(path`/twitter/user/${username}`, options);
  }

  /**
   * Returns an object with user's extended bio with all text and formatting details,
   * or an empty object if the extended bio is missing.
   */
  retrieveExtendedBio(
    username: string,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveExtendedBioResponse> {
    return this._client.get(path`/twitter/user/${username}/extended-bio`, options);
  }
}

export interface Error {
  message: string;

  status: 'error';
}

/**
 * Twitter user account information
 */
export interface User {
  /**
   * The integer representation of the unique identifier for this User. This number
   * is greater than 53 bits and some programming languages may have
   * difficulty/silent defects in interpreting it. Using a signed 64 bit integer for
   * storing this identifier is safe. Use id_str to fetch the identifier to be safe.
   */
  id: number;

  /**
   * Indicates whether the authenticated user can send a direct message to this user.
   */
  can_dm: boolean;

  /**
   * The UTC datetime that the user account was created on Twitter.
   */
  created_at: string;

  /**
   * The user-defined UTF-8 string describing their account.
   */
  description: string;

  /**
   * The number of Tweets this user has liked in the account's lifetime. British
   * spelling used in the field name for historical reasons.
   */
  favourites_count: number;

  /**
   * The number of followers this account currently has. Under certain conditions of
   * duress, this field will temporarily indicate "0".
   */
  followers_count: number;

  /**
   * The number of users this account is following (AKA their "followings"). Under
   * certain conditions of duress, this field will temporarily indicate "0".
   */
  friends_count: number;

  /**
   * The string representation of the unique identifier for this User.
   * Implementations should use this rather than the large, possibly un-consumable
   * integer in id.
   */
  id_str: string;

  /**
   * The number of public lists that this user is a member of.
   */
  listed_count: number;

  /**
   * The user-defined location for this account's profile. Not necessarily a
   * location, nor machine-parseable. This field will occasionally be fuzzily
   * interpreted by the Search service.
   */
  location: string;

  /**
   * The name of the user, as they've defined it. Not necessarily a person's name.
   * Typically capped at 50 characters, but subject to change.
   */
  name: string;

  /**
   * The HTTPS-based URL pointing to the standard web representation of the user's
   * uploaded profile banner. By adding a final path element of the URL, it is
   * possible to obtain different image sizes optimized for specific displays.
   */
  profile_banner_url: string;

  /**
   * A HTTPS-based URL pointing to the user's profile image.
   */
  profile_image_url_https: string;

  /**
   * When true, indicates that this user has chosen to protect their Tweets.
   */
  protected: boolean;

  /**
   * The screen name, handle, or alias that this user identifies themselves with.
   * screen_names are unique but subject to change. Use id_str as a user identifier
   * whenever possible. Typically a maximum of 15 characters long, but some
   * historical accounts may exist with longer names.
   */
  screen_name: string;

  /**
   * The number of Tweets (including retweets) issued by the user.
   */
  statuses_count: number;

  /**
   * When true, indicates that the user has a verified account with a blue checkmark.
   */
  verified: boolean;

  /**
   * A URL provided by the user in association with their profile.
   */
  url?: string | null;
}

/**
 * Twitter user account information
 */
export type UserResponse = User | Error;

export type UsersResponse = UsersResponse.UnionMember0 | Error;

export namespace UsersResponse {
  export interface UnionMember0 {
    /**
     * Cursor value used to obtain the subsequent page. To be passed to the same
     * endpoint as 'cursor' query parameter. Value may contain spaces and other special
     * characters and therefore must be url-encoded to avoid any errors
     */
    next_cursor: string;

    users: Array<UserAPI.User>;
  }
}

export type UserListListsResponse = UserListListsResponse.UnionMember0 | Error;

export namespace UserListListsResponse {
  export interface UnionMember0 {
    lists: Array<unknown>;

    /**
     * Cursor for pagination to get the next page of results
     */
    next_cursor: string;
  }
}

/**
 * Extended bio object with formatting details
 */
export type UserRetrieveExtendedBioResponse = unknown | unknown;

export interface UserListAffiliatesParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface UserListFollowersParams {
  /**
   * Cursor value obtained from next_cursor response property. Use this value to
   * retrieve additional pages. Omit this value to retrieve the first page.
   */
  cursor?: string;
}

export interface UserListHighlightsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface UserListListsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface UserListMentionsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export interface UserListTweetsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface UserListTweetsAndRepliesParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface UserListVerifiedFollowersParams {
  /**
   * Cursor value obtained from next_cursor response property. Use this value to
   * retrieve additional pages. Omit this value to retrieve the first page.
   */
  cursor?: string;
}

UserResource.Following = Following;

export declare namespace UserResource {
  export {
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
    Following as Following,
    type FollowingVerifyRelationshipResponse as FollowingVerifyRelationshipResponse,
    type FollowingListParams as FollowingListParams,
    type FollowingVerifyRelationshipParams as FollowingVerifyRelationshipParams,
  };
}
