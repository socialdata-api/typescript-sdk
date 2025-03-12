// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TwitterAPI from './twitter';
import * as UsersAPI from './users';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tweets extends APIResource {
  /**
   * Retrieves complete tweet details by its ID.
   */
  getTweet(tweetID: string, options?: RequestOptions): APIPromise<Tweet> {
    return this._client.get(path`/twitter/tweets/${tweetID}`, options);
  }

  /**
   * Returns an array of comments for a given tweet_id. This endpoint only works for
   * top-level tweets (i.e. this can't be used to retrieve comments posted in
   * response to other comments).
   */
  getTweetComments(
    tweetID: string,
    query: TweetGetTweetCommentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/comments`, { query, ...options });
  }

  /**
   * Returns an array of quotes for a given tweet_id. This endpoint retrieves tweets
   * that quote the target tweet.
   */
  getTweetQuotes(
    tweetID: string,
    query: TweetGetTweetQuotesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/quotes`, { query, ...options });
  }

  /**
   * This endpoint returns an array of user profiles that retweeted the target tweet
   * identified by tweet_id. The profiles are returned in reverse chronological
   * order, with the most recent retweets appearing on the first page.
   */
  getTweetRetweeters(
    tweetID: string,
    query: TweetGetTweetRetweetersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsersAPI.UsersResponse> {
    return this._client.get(path`/twitter/tweets/${tweetID}/retweeted_by`, { query, ...options });
  }

  /**
   * Returns an array of tweets associated with a thread and a next_cursor value used
   * to retrieve more pages (if the thread contains more than 30 posts).
   */
  getTweetThread(
    threadID: string,
    query: TweetGetTweetThreadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get(path`/twitter/thread/${threadID}`, { query, ...options });
  }
}

/**
 * Represents a Tweet object with all its properties
 */
export interface Tweet {
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
  user: UsersAPI.User;

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
    hashtags: Array<Entities.Hashtag>;

    symbols: Array<Entities.Symbol>;

    urls: Array<Entities.URL>;

    user_mentions: Array<Entities.UserMention>;

    media?: Array<Entities.Media>;

    /**
     * Represents a poll attached to a Tweet
     */
    poll?: Entities.Poll;
  }

  export namespace Entities {
    export interface Hashtag {
      /**
       * An array of integers representing offsets within the Tweet text where the
       * hashtag begins and ends.
       */
      indices?: Array<number>;

      /**
       * Name of the hashtag, minus the leading '#' character.
       */
      text?: string;
    }

    export interface Symbol {
      /**
       * An array of integers representing offsets within the Tweet text where the symbol
       * begins and ends.
       */
      indices?: Array<number>;

      /**
       * Name of the cashtag, minus the leading '$' character.
       */
      text?: string;
    }

    export interface URL {
      /**
       * URL pasted/typed into Tweet.
       */
      display_url?: string;

      /**
       * Expanded version of display_url.
       */
      expanded_url?: string;

      /**
       * An array of integers representing offsets within the Tweet text where the URL
       * begins and ends.
       */
      indices?: Array<number>;

      /**
       * Wrapped URL, corresponding to the value embedded directly into the raw Tweet
       * text.
       */
      url?: string;
    }

    export interface UserMention {
      /**
       * ID of the mentioned user, as a string.
       */
      id_str?: string;

      /**
       * An array of integers representing offsets within the Tweet text where the user
       * mention begins and ends.
       */
      indices?: Array<number>;

      /**
       * Display name of the referenced user.
       */
      name?: string;

      /**
       * Screen name of the referenced user.
       */
      screen_name?: string;
    }

    export interface Media {
      /**
       * URL of the media to display to clients.
       */
      display_url?: string;

      /**
       * Expanded version of display_url.
       */
      expanded_url?: string;

      /**
       * ID of the media expressed as a string.
       */
      id_str?: string;

      /**
       * An array of integers representing offsets within the Tweet text where the media
       * begins and ends.
       */
      indices?: Array<number>;

      /**
       * HTTPS URL pointing directly to the uploaded media file.
       */
      media_url_https?: string;

      /**
       * Type of uploaded media.
       */
      type?: 'photo' | 'video' | 'animated_gif';

      /**
       * Wrapped URL for the media link.
       */
      url?: string;
    }

    /**
     * Represents a poll attached to a Tweet
     */
    export interface Poll {
      /**
       * An array of poll choices
       */
      choices: Array<Poll.Choice>;

      /**
       * Indicates whether the voting period has ended and the results are final
       */
      counts_are_final: boolean;

      /**
       * The duration of the poll in minutes
       */
      duration_minutes: number;

      /**
       * The UTC datetime when the poll will end
       */
      end_datetime: string;
    }

    export namespace Poll {
      /**
       * Represents a single choice in a poll
       */
      export interface Choice {
        /**
         * The number of votes for this choice
         */
        count: number;

        /**
         * The text of the poll choice
         */
        label: string;
      }
    }
  }
}

export interface TweetGetTweetCommentsParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export interface TweetGetTweetQuotesParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   */
  cursor?: string;
}

export interface TweetGetTweetRetweetersParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export interface TweetGetTweetThreadParams {
  /**
   * Cursor value obtained from `next_cursor` response property. Use this parameter
   * to retrieve additional pages. Omit this parameter to retrieve the first page.
   * Cursor may contain spaces and other special characters, therefore always
   * remember to URL-encode the value.
   */
  cursor?: string;
}

export declare namespace Tweets {
  export {
    type Tweet as Tweet,
    type TweetGetTweetCommentsParams as TweetGetTweetCommentsParams,
    type TweetGetTweetQuotesParams as TweetGetTweetQuotesParams,
    type TweetGetTweetRetweetersParams as TweetGetTweetRetweetersParams,
    type TweetGetTweetThreadParams as TweetGetTweetThreadParams,
  };
}
