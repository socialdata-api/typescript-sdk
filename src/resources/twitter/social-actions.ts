// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UsersAPI from './users';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SocialActions extends APIResource {
  /**
   * This endpoint provides a convenient way to check if a user identified by user_id
   * posted a comment in response to a tweet identified by tweet_id. This endpoint
   * only detects direct replies to a target tweet, and not comments posted under
   * other comments.
   *
   * The endpoint returns an array of comment_ids taking into account that a single
   * user may have posted more than a single reply.
   */
  verifyUserCommented(
    userID: string,
    tweetID: string,
    options?: RequestOptions,
  ): APIPromise<SocialActionVerifyUserCommentedResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/commented_by/${userID}`, options);
  }

  /**
   * This endpoint provides a convenient way to check if a user (identified by
   * source_user_id) is following another user (identified by target_user_id). The
   * endpoint achieves this without scraping the entire followers list which allows
   * us to deliver a fully accurate result with minimal latency.
   */
  verifyUserIsFollowing(
    sourceUserID: string,
    targetUserID: string,
    options?: RequestOptions,
  ): APIPromise<SocialActionVerifyUserIsFollowingResponse> {
    return this._client.get(path`/twitter/user/${sourceUserID}/following/${targetUserID}`, options);
  }

  /**
   * This endpoint provides a convenient way to check if a user retweeted a tweet
   * identified by tweet_id. This will recursively retrieve all users who recently
   * retweeted a tweet and check if the user_id is present among the retrieved users.
   */
  verifyUserRetweeted(
    userID: string,
    tweetID: string,
    options?: RequestOptions,
  ): APIPromise<SocialActionVerifyUserRetweetedResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/retweeted_by/${userID}`, options);
  }
}

/**
 * Provides information about whether a user has commented on a specific tweet
 */
export type SocialActionVerifyUserCommentedResponse =
  | SocialActionVerifyUserCommentedResponse.UserCommentedStatus
  | UsersAPI.Error;

export namespace SocialActionVerifyUserCommentedResponse {
  /**
   * Provides information about whether a user has commented on a specific tweet
   */
  export interface UserCommentedStatus {
    /**
     * List of comment IDs made by the user on the target tweet
     */
    comment_ids: Array<string>;

    /**
     * Indicates whether the user has commented on the target tweet
     */
    is_commented: boolean;

    /**
     * Status of the request, "success" when successful
     */
    status: string;
  }
}

export type SocialActionVerifyUserIsFollowingResponse =
  | SocialActionVerifyUserIsFollowingResponse.UserFollowingStatus
  | UsersAPI.Error;

export namespace SocialActionVerifyUserIsFollowingResponse {
  export interface UserFollowingStatus {
    /**
     * @deprecated Deprecated. Currently returns 'null'
     */
    followers_checked_count: number;

    /**
     * Indicates whether user identified by source_user_id is following user identified
     * by target_user_id.
     */
    is_following: boolean;

    /**
     * The string representation of the unique identifier for follower User.
     */
    source_user_id: string;

    status: string;

    /**
     * The string representation of the unique identifier for the User being followed.
     */
    target_user_id: string;
  }
}

export type SocialActionVerifyUserRetweetedResponse =
  | SocialActionVerifyUserRetweetedResponse.UserRetweetedStatus
  | UsersAPI.Error;

export namespace SocialActionVerifyUserRetweetedResponse {
  export interface UserRetweetedStatus {
    /**
     * Indicates whether user identified by source_user_id has retweeted the Tweet=
     * identified by target_tweet_id.
     */
    is_retweeted: boolean;

    /**
     * @deprecated Deprecated. Currently returns 'null'
     */
    retweeters_checked_count: number;

    /**
     * The string representation of the unique identifier for User.
     */
    source_user_id: string;

    status: string;

    /**
     * The string representation of the unique identifier for the Tweet being
     * retweeted.
     */
    target_tweet_id: string;
  }
}

export declare namespace SocialActions {
  export {
    type SocialActionVerifyUserCommentedResponse as SocialActionVerifyUserCommentedResponse,
    type SocialActionVerifyUserIsFollowingResponse as SocialActionVerifyUserIsFollowingResponse,
    type SocialActionVerifyUserRetweetedResponse as SocialActionVerifyUserRetweetedResponse,
  };
}
