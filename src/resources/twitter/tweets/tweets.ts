// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TwitterAPI from '../twitter';
import * as CommentedByAPI from './commented-by';
import { CommentedBy, CommentedByVerifyUserParams, CommentedByVerifyUserResponse } from './commented-by';
import * as RetweetedByAPI from './retweeted-by';
import {
  RetweetedBy,
  RetweetedByListParams,
  RetweetedByVerifyUserParams,
  RetweetedByVerifyUserResponse,
} from './retweeted-by';
import * as UserAPI from '../user/user';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tweets extends APIResource {
  retweetedBy: RetweetedByAPI.RetweetedBy = new RetweetedByAPI.RetweetedBy(this._client);
  commentedBy: CommentedByAPI.CommentedBy = new CommentedByAPI.CommentedBy(this._client);

  /**
   * Retrieves complete tweet details by its ID.
   */
  retrieve(tweetID: string, options?: RequestOptions): APIPromise<TweetRetrieveResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}`, options);
  }

  /**
   * Returns an array of comments for a given tweet_id. This endpoint only works for
   * top-level tweets (i.e. this can't be used to retrieve comments posted in
   * response to other comments).
   */
  listComments(
    tweetID: string,
    query: TweetListCommentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/comments`, { query, ...options });
  }

  /**
   * Returns an array of quotes for a given tweet_id. This endpoint retrieves tweets
   * that quote the target tweet.
   */
  listQuotes(
    tweetID: string,
    query: TweetListQuotesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/quotes`, { query, ...options });
  }
}

/**
 * Represents a Tweet object with all its properties
 */
export interface Tweet {
  /**
   * The integer representation of the unique identifier for this Tweet. This number
   * is greater than 53 bits and some programming languages may have
   * difficulty/silent defects in interpreting it. Using a signed 64 bit integer for
   * storing this identifier is safe. Use id_str to fetch the identifier to be safe.
   */
  id: number;

  /**
   * Number of times this tweet has been bookmarked.
   */
  bookmark_count: number;

  /**
   * Entities which have been parsed out of the text of the Tweet such as hashtags,
   * URLs, user mentions, media, and symbols.
   */
  entities: Tweet.Entities;

  /**
   * Nullable. Indicates approximately how many times this Tweet has been liked by
   * Twitter users.
   */
  favorite_count: number;

  /**
   * 100 tips I learned growing an iOS app to ~$5M in sales in 3 yrs, going through
   * YC 1.5 times, and co-founding @Superwall 👇
   */
  full_text: string;

  /**
   * The string representation of the unique identifier for this Tweet.
   * Implementations should use this rather than the large integer in id.
   */
  id_str: string;

  /**
   * Indicates if the tweet is pinned to the user's profile.
   */
  is_pinned: boolean;

  /**
   * Indicates whether this is a Quoted Tweet.
   */
  is_quote_status: boolean;

  /**
   * Nullable. When present, indicates a BCP 47 language identifier corresponding to
   * the machine-detected language of the Tweet text, or und if no language could be
   * detected.
   */
  lang: string;

  /**
   * Nullable. Indicates approximately how many times this Tweet has been quoted by
   * Twitter users.
   */
  quote_count: number;

  /**
   * Number of times this Tweet has been replied to.
   */
  reply_count: number;

  /**
   * Number of times this Tweet has been retweeted.
   */
  retweet_count: number;

  /**
   * Utility used to post the Tweet, as an HTML-formatted string. Tweets from the
   * Twitter website have a source value of web.
   */
  source: string;

  /**
   * Indicates whether the value of the text parameter was truncated, for example, as
   * a result of a retweet exceeding the original Tweet text length limit of 140
   * characters. Since Twitter now rejects long Tweets vs truncating them, the large
   * majority of Tweets will have this set to false.
   */
  truncated: boolean;

  /**
   * The UTC datetime when the tweet was created
   */
  tweet_created_at: string;

  /**
   * The user who posted this Tweet.
   */
  user: UserAPI.User;

  /**
   * Number of views this tweet has received.
   */
  views_count: number;

  /**
   * If the represented Tweet is a reply, this field will contain the screen name of
   * the original Tweet's author.
   */
  in_reply_to_screen_name?: string | null;

  /**
   * If the represented Tweet is a reply, this field will contain the integer
   * representation of the original Tweet's ID.
   */
  in_reply_to_status_id?: number | null;

  /**
   * If the represented Tweet is a reply, this field will contain the string
   * representation of the original Tweet's ID.
   */
  in_reply_to_status_id_str?: string | null;

  /**
   * If the represented Tweet is a reply, this field will contain the integer
   * representation of the original Tweet's author ID. This will not necessarily
   * always be the user directly mentioned in the Tweet.
   */
  in_reply_to_user_id?: number | null;

  /**
   * If the represented Tweet is a reply, this field will contain the string
   * representation of the original Tweet's author ID. This will not necessarily
   * always be the user directly mentioned in the Tweet.
   */
  in_reply_to_user_id_str?: string | null;

  /**
   * This field only surfaces when the Tweet is a quote Tweet. This attribute
   * contains the Tweet object of the original Tweet that was quoted.
   */
  quoted_status?: Tweet | null;

  /**
   * This field only surfaces when the Tweet is a quote Tweet. This field contains
   * the integer value Tweet ID of the quoted Tweet.
   */
  quoted_status_id?: number | null;

  /**
   * This field only surfaces when the Tweet is a quote Tweet. This is the string
   * representation Tweet ID of the quoted Tweet.
   */
  quoted_status_id_str?: string | null;

  /**
   * Users can amplify the broadcast of Tweets authored by other users by retweeting.
   * Retweets can be distinguished from typical Tweets by the existence of a
   * retweeted_status attribute. This attribute contains a representation of the
   * original Tweet that was retweeted.
   */
  retweeted_status?: Tweet | null;

  /**
   * Deprecated. Always `null`
   */
  text?: string | null;
}

export namespace Tweet {
  /**
   * Entities which have been parsed out of the text of the Tweet such as hashtags,
   * URLs, user mentions, media, and symbols.
   */
  export interface Entities {
    hashtags?: Array<unknown>;

    media?: Array<unknown>;

    symbols?: Array<unknown>;

    timestamps?: Array<unknown>;

    urls?: Array<unknown>;

    user_mentions?: Array<unknown>;
  }
}

/**
 * Represents a Tweet object with all its properties
 */
export type TweetRetrieveResponse = Tweet | UserAPI.Error;

export interface TweetListCommentsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export interface TweetListQuotesParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

Tweets.RetweetedBy = RetweetedBy;
Tweets.CommentedBy = CommentedBy;

export declare namespace Tweets {
  export {
    type Tweet as Tweet,
    type TweetRetrieveResponse as TweetRetrieveResponse,
    type TweetListCommentsParams as TweetListCommentsParams,
    type TweetListQuotesParams as TweetListQuotesParams,
  };

  export {
    RetweetedBy as RetweetedBy,
    type RetweetedByVerifyUserResponse as RetweetedByVerifyUserResponse,
    type RetweetedByListParams as RetweetedByListParams,
    type RetweetedByVerifyUserParams as RetweetedByVerifyUserParams,
  };

  export {
    CommentedBy as CommentedBy,
    type CommentedByVerifyUserResponse as CommentedByVerifyUserResponse,
    type CommentedByVerifyUserParams as CommentedByVerifyUserParams,
  };
}
