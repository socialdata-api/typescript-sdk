// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Monitors extends APIResource {
  /**
   * Creates a new monitor to receive alerts when any profile posts a link to
   * pump.fun coin page. This monitor will only detect tweets that contain links to
   * pump.fun posted by non-shadow-banned Twitter users that have at least 1000
   * followers.
   */
  createPumpFunMonitor(
    body: MonitorCreatePumpFunMonitorParams,
    options?: RequestOptions,
  ): APIPromise<MonitorCreatePumpFunMonitorResponse> {
    return this._client.post('/monitors/search-pump-fun', { body, ...options });
  }

  /**
   * Creates a new monitor to receive alerts when the target Twitter user follows
   * someone.
   */
  createUserFollowingMonitor(
    body: MonitorCreateUserFollowingMonitorParams,
    options?: RequestOptions,
  ): APIPromise<MonitorCreateUserFollowingMonitorResponse> {
    return this._client.post('/monitors/user-following', { body, ...options });
  }

  /**
   * Creates a new monitor to receive alerts when the target Twitter user changes
   * their profile. Changes in any of the following user profile properties will
   * trigger an event: name, screen_name, location, url, description,
   * profile_banner_url, profile_image_url_https
   */
  createUserProfileMonitor(
    body: MonitorCreateUserProfileMonitorParams,
    options?: RequestOptions,
  ): APIPromise<MonitorCreateUserProfileMonitorResponse> {
    return this._client.post('/monitors/user-profile', { body, ...options });
  }

  /**
   * Creates a new monitor to receive alerts when the target Twitter user posts a new
   * tweet or makes a retweet. When adding a new monitor SocialData will attempt to
   * fetch user details and return HTTP Status 422 in case the user timeline is
   * protected or user not found.
   */
  createUserTweetsMonitor(
    body: MonitorCreateUserTweetsMonitorParams,
    options?: RequestOptions,
  ): APIPromise<MonitorCreateUserTweetsMonitorResponse> {
    return this._client.post('/monitors/user-tweets', { body, ...options });
  }

  /**
   * Deletes an active monitor. This action stops the API from monitoring new events
   * for the target user profile and halts all future charges associated with this
   * monitor.
   */
  deleteMonitor(monitorID: string, options?: RequestOptions): APIPromise<MonitorDeleteMonitorResponse> {
    return this._client.delete(path`/monitors/${monitorID}`, options);
  }

  /**
   * Returns a list of monitors owned by the user.
   */
  listActiveMonitors(
    query: MonitorListActiveMonitorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MonitorListActiveMonitorsResponse> {
    return this._client.get('/monitors', { query, ...options });
  }

  /**
   * Returns details about a specific monitor.
   */
  retrieveMonitorDetails(
    monitorID: string,
    options?: RequestOptions,
  ): APIPromise<MonitorRetrieveMonitorDetailsResponse> {
    return this._client.get(path`/monitors/${monitorID}`, options);
  }

  /**
   * Used to update or remove a monitor-specific webhook_url. This only updates the
   * webhook URL value associated with a single monitor and does not change your
   * global webhook URL. When monitor-specific webhook is not set, all webhook
   * requests will be routed to your global webhook URL.
   */
  updateMonitorWebhook(
    monitorID: string,
    body: MonitorUpdateMonitorWebhookParams,
    options?: RequestOptions,
  ): APIPromise<MonitorUpdateMonitorWebhookResponse> {
    return this._client.patch(path`/monitors/${monitorID}`, { body, ...options });
  }
}

/**
 * Represents a monitor configuration
 */
export interface Monitor {
  /**
   * Unique identifier for the monitor
   */
  id: string;

  /**
   * The UTC datetime when the monitor was created
   */
  created_at: string;

  /**
   * Type of monitor
   */
  monitor_type: 'user_tweets' | 'user_following' | 'user_profile' | 'search_pump_fun';

  /**
   * Configuration parameters specific to the type of monitor
   */
  parameters: unknown;

  /**
   * Monitor-specific webhook URL that overrides the global webhook URL, if set
   */
  webhook_url?: string | null;
}

export interface MonitorCreatePumpFunMonitorResponse {
  /**
   * Represents a monitor configuration
   */
  data?: Monitor;

  status?: string;
}

export interface MonitorCreateUserFollowingMonitorResponse {
  /**
   * Represents a monitor configuration
   */
  data?: Monitor;

  status?: string;
}

export interface MonitorCreateUserProfileMonitorResponse {
  /**
   * Represents a monitor configuration
   */
  data?: Monitor;

  status?: string;
}

export interface MonitorCreateUserTweetsMonitorResponse {
  /**
   * Represents a monitor configuration
   */
  data?: Monitor;

  status?: string;
}

export interface MonitorDeleteMonitorResponse {
  status?: string;
}

export interface MonitorListActiveMonitorsResponse {
  data: Array<Monitor>;

  meta: MonitorListActiveMonitorsResponse.Meta;
}

export namespace MonitorListActiveMonitorsResponse {
  export interface Meta {
    /**
     * Total number of monitors
     */
    items_count?: number;

    /**
     * Total number of pages
     */
    last_page?: number;

    /**
     * Current page number
     */
    page?: number;
  }
}

export interface MonitorRetrieveMonitorDetailsResponse {
  /**
   * Represents a monitor configuration
   */
  data?: Monitor;

  status?: string;
}

export interface MonitorUpdateMonitorWebhookResponse {
  /**
   * Represents a monitor configuration
   */
  data?: Monitor;

  status?: string;
}

export interface MonitorCreatePumpFunMonitorParams {
  /**
   * Monitor-specific webhook URL that will override your global webhook URL. Not
   * required.
   */
  webhook_url?: string;
}

export interface MonitorCreateUserFollowingMonitorParams {
  /**
   * User ID of the target user. Required if user_screen_name not provided.
   */
  user_id?: string;

  /**
   * Username of the target user without @. Required if user_id not provided.
   */
  user_screen_name?: string;

  /**
   * Monitor-specific webhook URL that will override your global webhook URL. Not
   * required.
   */
  webhook_url?: string;
}

export interface MonitorCreateUserProfileMonitorParams {
  /**
   * User ID of the target user. Required if user_screen_name not provided.
   */
  user_id?: string;

  /**
   * Username of the target user without @. Required if user_id not provided.
   */
  user_screen_name?: string;

  /**
   * Monitor-specific webhook URL that will override your global webhook URL. Not
   * required.
   */
  webhook_url?: string;
}

export interface MonitorCreateUserTweetsMonitorParams {
  /**
   * User ID of the target user. Required if user_screen_name not provided.
   */
  user_id?: string;

  /**
   * Username of the target user without @. Required if user_id not provided.
   */
  user_screen_name?: string;

  /**
   * Monitor-specific webhook URL that will override your global webhook URL. Not
   * required.
   */
  webhook_url?: string;
}

export interface MonitorListActiveMonitorsParams {
  /**
   * Page number. Endpoint returns up to 50 monitors per page.
   */
  page?: number;
}

export interface MonitorUpdateMonitorWebhookParams {
  /**
   * New webhook URL for this monitor. Pass null to remove monitor-specific webhook.
   */
  webhook_url: string | null;
}

export declare namespace Monitors {
  export {
    type Monitor as Monitor,
    type MonitorCreatePumpFunMonitorResponse as MonitorCreatePumpFunMonitorResponse,
    type MonitorCreateUserFollowingMonitorResponse as MonitorCreateUserFollowingMonitorResponse,
    type MonitorCreateUserProfileMonitorResponse as MonitorCreateUserProfileMonitorResponse,
    type MonitorCreateUserTweetsMonitorResponse as MonitorCreateUserTweetsMonitorResponse,
    type MonitorDeleteMonitorResponse as MonitorDeleteMonitorResponse,
    type MonitorListActiveMonitorsResponse as MonitorListActiveMonitorsResponse,
    type MonitorRetrieveMonitorDetailsResponse as MonitorRetrieveMonitorDetailsResponse,
    type MonitorUpdateMonitorWebhookResponse as MonitorUpdateMonitorWebhookResponse,
    type MonitorCreatePumpFunMonitorParams as MonitorCreatePumpFunMonitorParams,
    type MonitorCreateUserFollowingMonitorParams as MonitorCreateUserFollowingMonitorParams,
    type MonitorCreateUserProfileMonitorParams as MonitorCreateUserProfileMonitorParams,
    type MonitorCreateUserTweetsMonitorParams as MonitorCreateUserTweetsMonitorParams,
    type MonitorListActiveMonitorsParams as MonitorListActiveMonitorsParams,
    type MonitorUpdateMonitorWebhookParams as MonitorUpdateMonitorWebhookParams,
  };
}
