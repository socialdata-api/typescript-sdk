// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Spaces extends APIResource {
  /**
   * Retrieves detailed information about a Twitter Space by its ID.
   */
  getSpace(spaceID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/twitter/space/${spaceID}`, options);
  }
}

/**
 * Twitter Space details
 */
export type SpaceGetSpaceResponse = unknown;

export declare namespace Spaces {
  export { type SpaceGetSpaceResponse as SpaceGetSpaceResponse };
}
