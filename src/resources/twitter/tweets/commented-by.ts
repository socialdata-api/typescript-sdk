// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UserAPI from '../user/user';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CommentedBy extends APIResource {
  /**
   * This endpoint provides a convenient way to check if a user identified by user_id
   * posted a comment in response to a tweet identified by tweet_id. This endpoint
   * only detects direct replies to a target tweet, and not comments posted under
   * other comments.
   *
   * The endpoint returns an array of comment_ids taking into account that a single
   * user may have posted more than a single reply.
   */
  verifyUser(
    userID: string,
    params: CommentedByVerifyUserParams,
    options?: RequestOptions,
  ): APIPromise<CommentedByVerifyUserResponse> {
    const { tweet_id } = params;
    return this._client.get(path`/twitter/tweets/${tweet_id}/commented_by/${userID}`, options);
  }
}

/**
 * Provides information about whether a user has commented on a specific tweet
 */
export type CommentedByVerifyUserResponse = CommentedByVerifyUserResponse.UserCommentedStatus | UserAPI.Error;

export namespace CommentedByVerifyUserResponse {
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

export interface CommentedByVerifyUserParams {
  /**
   * The numeric ID of the target tweet. When using languages where the id value
   * exceeds the default Integer type limit (e.g., JavaScript), you should store id
   * as a String. Use the id_str property returned by the API for these values.
   */
  tweet_id: string;
}

export declare namespace CommentedBy {
  export {
    type CommentedByVerifyUserResponse as CommentedByVerifyUserResponse,
    type CommentedByVerifyUserParams as CommentedByVerifyUserParams,
  };
}
