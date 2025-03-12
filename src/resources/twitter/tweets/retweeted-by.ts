// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UserAPI from '../user/user';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RetweetedBy extends APIResource {
  /**
   * This endpoint returns an array of user profiles that retweeted the target tweet
   * identified by tweet_id. The profiles are returned in reverse chronological
   * order, with the most recent retweets appearing on the first page.
   */
  list(
    tweetID: string,
    query: RetweetedByListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserAPI.UsersResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/retweeted_by`, { query, ...options });
  }

  /**
   * This endpoint provides a convenient way to check if a user retweeted a tweet
   * identified by tweet_id. This will recursively retrieve all users who recently
   * retweeted a tweet and check if the user_id is present among the retrieved users.
   */
  verifyUser(
    userID: string,
    params: RetweetedByVerifyUserParams,
    options?: RequestOptions,
  ): APIPromise<RetweetedByVerifyUserResponse> {
    const { tweet_id } = params;
    return this._client.get(path`/twitter/tweets/${tweet_id}/retweeted_by/${userID}`, options);
  }
}

export type RetweetedByVerifyUserResponse = RetweetedByVerifyUserResponse.UserRetweetedStatus | UserAPI.Error;

export namespace RetweetedByVerifyUserResponse {
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

export interface RetweetedByListParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface RetweetedByVerifyUserParams {
  /**
   * The numeric ID of the target tweet. When using languages where the id value
   * exceeds the default Integer type limit (e.g., JavaScript), you should store id
   * as a String. Use the id_str property returned by the API for these values.
   */
  tweet_id: string;
}

export declare namespace RetweetedBy {
  export {
    type RetweetedByVerifyUserResponse as RetweetedByVerifyUserResponse,
    type RetweetedByListParams as RetweetedByListParams,
    type RetweetedByVerifyUserParams as RetweetedByVerifyUserParams,
  };
}
