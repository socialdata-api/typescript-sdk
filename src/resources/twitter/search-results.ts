// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TwitterAPI from './twitter';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SearchResults extends APIResource {
  /**
   * Returns array of tweets provided by Twitter search. Typically Twitter returns
   * ~20 results per page. You can request additional search results by sending
   * another request to the same endpoint using cursor parameter. This endpoint
   * supports all Twitter advanced search operators (to be passed within the 'query'
   * value)
   */
  retrieve(
    query: SearchResultRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TwitterAPI.TweetsResponse> {
    return this._client.get('/twitter/search', { query, ...options });
  }
}

export interface SearchResultRetrieveParams {
  /**
   * A UTF-8, URL-encoded search query, including any operators supported by Twitter
   * advanced search
   */
  query: string;

  /**
   * Cursor value obtained from next_cursor response property. Used to retrieve
   * additional pages for the same query
   */
  cursor?: string;

  /**
   * Search type (Latest for recent tweets or Top for popular tweets). Default -
   * Latest
   */
  type?: 'Latest' | 'Top';
}

export declare namespace SearchResults {
  export { type SearchResultRetrieveParams as SearchResultRetrieveParams };
}
