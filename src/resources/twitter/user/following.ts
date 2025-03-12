// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UserAPI from './user';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Following extends APIResource {
  /**
   * Returns an array of user profiles that the target profile identified by user_id
   * is following. The profiles are returned in reverse chronological order, with the
   * most recently followed profiles appearing on the first page.
   */
  list(
    userID: string,
    query: FollowingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserAPI.UsersResponse> {
    return this._client.get(path`/twitter/user/${userID}/following`, { query, ...options });
  }

  /**
   * This endpoint provides a convenient way to check if a user (identified by
   * source_user_id) is following another user (identified by target_user_id). The
   * endpoint achieves this without scraping the entire followers list which allows
   * us to deliver a fully accurate result with minimal latency.
   */
  verifyRelationship(
    targetUserID: string,
    params: FollowingVerifyRelationshipParams,
    options?: RequestOptions,
  ): APIPromise<FollowingVerifyRelationshipResponse> {
    const { source_user_id } = params;
    return this._client.get(path`/twitter/user/${source_user_id}/following/${targetUserID}`, options);
  }
}

export type FollowingVerifyRelationshipResponse =
  | FollowingVerifyRelationshipResponse.UserFollowingStatus
  | UserAPI.Error;

export namespace FollowingVerifyRelationshipResponse {
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

export interface FollowingListParams {
  /**
   * Cursor value obtained from next_cursor response property. Use this value to
   * retrieve additional pages. Omit this value to retrieve the first page.
   */
  cursor?: string;
}

export interface FollowingVerifyRelationshipParams {
  /**
   * The numeric ID of the follower user. When using languages where the user_id
   * value exceeds the default Integer type limit (e.g., JavaScript), you should
   * store user_id as a String. Use the id_str property returned by the API for these
   * values.
   */
  source_user_id: string;
}

export declare namespace Following {
  export {
    type FollowingVerifyRelationshipResponse as FollowingVerifyRelationshipResponse,
    type FollowingListParams as FollowingListParams,
    type FollowingVerifyRelationshipParams as FollowingVerifyRelationshipParams,
  };
}
