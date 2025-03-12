// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CommunitiesAPI from './communities';
import {
  Communities,
  CommunityGetCommunityMembersParams,
  CommunityGetCommunityMembersResponse,
  CommunityGetCommunityTweetsParams,
} from './communities';
import * as ListsAPI from './lists';
import { ListGetListMembersParams, ListGetListResponse, ListGetListTweetsParams, Lists } from './lists';
import * as SearchResultsAPI from './search-results';
import { SearchResultRetrieveParams, SearchResults } from './search-results';
import * as SocialActionsAPI from './social-actions';
import {
  SocialActionVerifyUserCommentedResponse,
  SocialActionVerifyUserIsFollowingResponse,
  SocialActionVerifyUserRetweetedResponse,
  SocialActions,
} from './social-actions';
import * as SpacesAPI from './spaces';
import { SpaceGetSpaceResponse, Spaces } from './spaces';
import * as TweetsAPI from './tweets';
import {
  Tweet,
  TweetGetTweetCommentsParams,
  TweetGetTweetQuotesParams,
  TweetGetTweetRetweetersParams,
  TweetGetTweetThreadParams,
  Tweets,
} from './tweets';
import * as UsersAPI from './users';
import {
  Error,
  User,
  UserGetMultipleUsersByIDsParams,
  UserGetMultipleUsersByUsernamesParams,
  UserGetUserAffiliatesParams,
  UserGetUserExtendedBioByUsernameResponse,
  UserGetUserFollowersParams,
  UserGetUserFollowingParams,
  UserGetUserHighlightsParams,
  UserGetUserListsParams,
  UserGetUserListsResponse,
  UserGetUserMentionsByUsernameParams,
  UserGetUserTweetsAndRepliesParams,
  UserGetUserTweetsParams,
  UserGetUserVerifiedFollowersParams,
  Users,
  UsersResponse,
} from './users';

export class Twitter extends APIResource {
  socialActions: SocialActionsAPI.SocialActions = new SocialActionsAPI.SocialActions(this._client);
  searchResults: SearchResultsAPI.SearchResults = new SearchResultsAPI.SearchResults(this._client);
  spaces: SpacesAPI.Spaces = new SpacesAPI.Spaces(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  tweets: TweetsAPI.Tweets = new TweetsAPI.Tweets(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  communities: CommunitiesAPI.Communities = new CommunitiesAPI.Communities(this._client);
}

export interface TweetsResponse {
  /**
   * Cursor value used to obtain the subsequent page. To be passed to the same
   * endpoint as 'cursor' query parameter. Value may contain spaces and other special
   * characters and therefore must be url-encoded to avoid any errors
   */
  next_cursor: string;

  tweets: Array<TweetsAPI.Tweet>;
}

export interface UsersWithoutCursorResponse {
  users: Array<UsersAPI.User>;
}

Twitter.SocialActions = SocialActions;
Twitter.SearchResults = SearchResults;
Twitter.Spaces = Spaces;
Twitter.Users = Users;
Twitter.Tweets = Tweets;
Twitter.Lists = Lists;
Twitter.Communities = Communities;

export declare namespace Twitter {
  export {
    type TweetsResponse as TweetsResponse,
    type UsersWithoutCursorResponse as UsersWithoutCursorResponse,
  };

  export {
    SocialActions as SocialActions,
    type SocialActionVerifyUserCommentedResponse as SocialActionVerifyUserCommentedResponse,
    type SocialActionVerifyUserIsFollowingResponse as SocialActionVerifyUserIsFollowingResponse,
    type SocialActionVerifyUserRetweetedResponse as SocialActionVerifyUserRetweetedResponse,
  };

  export { SearchResults as SearchResults, type SearchResultRetrieveParams as SearchResultRetrieveParams };

  export { Spaces as Spaces, type SpaceGetSpaceResponse as SpaceGetSpaceResponse };

  export {
    Users as Users,
    type Error as Error,
    type User as User,
    type UsersResponse as UsersResponse,
    type UserGetUserExtendedBioByUsernameResponse as UserGetUserExtendedBioByUsernameResponse,
    type UserGetUserListsResponse as UserGetUserListsResponse,
    type UserGetMultipleUsersByIDsParams as UserGetMultipleUsersByIDsParams,
    type UserGetMultipleUsersByUsernamesParams as UserGetMultipleUsersByUsernamesParams,
    type UserGetUserAffiliatesParams as UserGetUserAffiliatesParams,
    type UserGetUserFollowersParams as UserGetUserFollowersParams,
    type UserGetUserFollowingParams as UserGetUserFollowingParams,
    type UserGetUserHighlightsParams as UserGetUserHighlightsParams,
    type UserGetUserListsParams as UserGetUserListsParams,
    type UserGetUserMentionsByUsernameParams as UserGetUserMentionsByUsernameParams,
    type UserGetUserTweetsParams as UserGetUserTweetsParams,
    type UserGetUserTweetsAndRepliesParams as UserGetUserTweetsAndRepliesParams,
    type UserGetUserVerifiedFollowersParams as UserGetUserVerifiedFollowersParams,
  };

  export {
    Tweets as Tweets,
    type Tweet as Tweet,
    type TweetGetTweetCommentsParams as TweetGetTweetCommentsParams,
    type TweetGetTweetQuotesParams as TweetGetTweetQuotesParams,
    type TweetGetTweetRetweetersParams as TweetGetTweetRetweetersParams,
    type TweetGetTweetThreadParams as TweetGetTweetThreadParams,
  };

  export {
    Lists as Lists,
    type ListGetListResponse as ListGetListResponse,
    type ListGetListMembersParams as ListGetListMembersParams,
    type ListGetListTweetsParams as ListGetListTweetsParams,
  };

  export {
    Communities as Communities,
    type CommunityGetCommunityMembersResponse as CommunityGetCommunityMembersResponse,
    type CommunityGetCommunityMembersParams as CommunityGetCommunityMembersParams,
    type CommunityGetCommunityTweetsParams as CommunityGetCommunityTweetsParams,
  };
}
