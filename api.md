# Twitter

Types:

- <code><a href="./src/resources/twitter/twitter.ts">TweetsResponse</a></code>
- <code><a href="./src/resources/twitter/twitter.ts">UsersWithoutCursorResponse</a></code>

## SocialActions

Types:

- <code><a href="./src/resources/twitter/social-actions.ts">SocialActionVerifyUserCommentedResponse</a></code>
- <code><a href="./src/resources/twitter/social-actions.ts">SocialActionVerifyUserIsFollowingResponse</a></code>
- <code><a href="./src/resources/twitter/social-actions.ts">SocialActionVerifyUserRetweetedResponse</a></code>

Methods:

- <code title="get /twitter/tweets/{tweet_id}/commented_by/{user_id}">client.twitter.socialActions.<a href="./src/resources/twitter/social-actions.ts">verifyUserCommented</a>(userID, tweetID) -> SocialActionVerifyUserCommentedResponse</code>
- <code title="get /twitter/user/{source_user_id}/following/{target_user_id}">client.twitter.socialActions.<a href="./src/resources/twitter/social-actions.ts">verifyUserIsFollowing</a>(sourceUserID, targetUserID) -> SocialActionVerifyUserIsFollowingResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/retweeted_by/{user_id}">client.twitter.socialActions.<a href="./src/resources/twitter/social-actions.ts">verifyUserRetweeted</a>(userID, tweetID) -> SocialActionVerifyUserRetweetedResponse</code>

## SearchResults

Methods:

- <code title="get /twitter/search">client.twitter.searchResults.<a href="./src/resources/twitter/search-results.ts">retrieve</a>({ ...params }) -> TweetsResponse</code>

## Spaces

Types:

- <code><a href="./src/resources/twitter/spaces.ts">SpaceGetSpaceResponse</a></code>

Methods:

- <code title="get /twitter/space/{space_id}">client.twitter.spaces.<a href="./src/resources/twitter/spaces.ts">getSpace</a>(spaceID) -> unknown</code>

## Users

Types:

- <code><a href="./src/resources/twitter/users.ts">Error</a></code>
- <code><a href="./src/resources/twitter/users.ts">User</a></code>
- <code><a href="./src/resources/twitter/users.ts">UserResponse</a></code>
- <code><a href="./src/resources/twitter/users.ts">UsersResponse</a></code>
- <code><a href="./src/resources/twitter/users.ts">UserGetUserExtendedBioByUsernameResponse</a></code>
- <code><a href="./src/resources/twitter/users.ts">UserGetUserListsResponse</a></code>

Methods:

- <code title="post /twitter/users-by-ids">client.twitter.users.<a href="./src/resources/twitter/users.ts">getMultipleUsersByIDs</a>({ ...params }) -> UsersWithoutCursorResponse</code>
- <code title="post /twitter/users-by-usernames">client.twitter.users.<a href="./src/resources/twitter/users.ts">getMultipleUsersByUsernames</a>({ ...params }) -> UsersWithoutCursorResponse</code>
- <code title="get /twitter/user/{user_id}/affiliates">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserAffiliates</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{user_id}">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserByID</a>(userID) -> UserResponse</code>
- <code title="get /twitter/user/{username}">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserByUsername</a>(username) -> UserResponse</code>
- <code title="get /twitter/user/{username}/extended-bio">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserExtendedBioByUsername</a>(username) -> UserGetUserExtendedBioByUsernameResponse</code>
- <code title="get /twitter/user/{user_id}/followers">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserFollowers</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{user_id}/following">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserFollowing</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{user_id}/highlights">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserHighlights</a>(userID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/lists">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserLists</a>(userID, { ...params }) -> UserGetUserListsResponse</code>
- <code title="get /twitter/user/{username}/mentions">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserMentionsByUsername</a>(username, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/tweets">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserTweets</a>(userID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/tweets-and-replies">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserTweetsAndReplies</a>(userID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/verified-followers">client.twitter.users.<a href="./src/resources/twitter/users.ts">getUserVerifiedFollowers</a>(userID, { ...params }) -> UsersResponse</code>

## Tweets

Types:

- <code><a href="./src/resources/twitter/tweets.ts">Tweet</a></code>
- <code><a href="./src/resources/twitter/tweets.ts">TweetGetTweetResponse</a></code>

Methods:

- <code title="get /twitter/tweets/{tweet_id}">client.twitter.tweets.<a href="./src/resources/twitter/tweets.ts">getTweet</a>(tweetID) -> TweetGetTweetResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/comments">client.twitter.tweets.<a href="./src/resources/twitter/tweets.ts">getTweetComments</a>(tweetID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/quotes">client.twitter.tweets.<a href="./src/resources/twitter/tweets.ts">getTweetQuotes</a>(tweetID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/retweeted_by">client.twitter.tweets.<a href="./src/resources/twitter/tweets.ts">getTweetRetweeters</a>(tweetID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/thread/{thread_id}">client.twitter.tweets.<a href="./src/resources/twitter/tweets.ts">getTweetThread</a>(threadID, { ...params }) -> TweetsResponse</code>

## Lists

Types:

- <code><a href="./src/resources/twitter/lists.ts">ListGetListResponse</a></code>

Methods:

- <code title="get /twitter/list/{list_id}">client.twitter.lists.<a href="./src/resources/twitter/lists.ts">getList</a>(listID) -> unknown</code>
- <code title="get /twitter/list/{list_id}/members">client.twitter.lists.<a href="./src/resources/twitter/lists.ts">getListMembers</a>(listID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/list/{list_id}/tweets">client.twitter.lists.<a href="./src/resources/twitter/lists.ts">getListTweets</a>(listID, { ...params }) -> TweetsResponse</code>

## Communities

Types:

- <code><a href="./src/resources/twitter/communities.ts">CommunityGetCommunityMembersResponse</a></code>

Methods:

- <code title="get /twitter/community/{community_id}/members">client.twitter.communities.<a href="./src/resources/twitter/communities.ts">getCommunityMembers</a>(communityID, { ...params }) -> CommunityGetCommunityMembersResponse</code>
- <code title="get /twitter/community/{community_id}/tweets">client.twitter.communities.<a href="./src/resources/twitter/communities.ts">getCommunityTweets</a>(communityID, { ...params }) -> TweetsResponse</code>

# User

Types:

- <code><a href="./src/resources/user.ts">UserSetGlobalWebhookResponse</a></code>

Methods:

- <code title="post /user/webhook">client.user.<a href="./src/resources/user.ts">setGlobalWebhook</a>({ ...params }) -> UserSetGlobalWebhookResponse</code>

# Monitors

Types:

- <code><a href="./src/resources/monitors.ts">Monitor</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreatePumpFunMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreateUserFollowingMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreateUserProfileMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreateUserTweetsMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorDeleteMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorGetMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorListMonitorsResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorSetMonitorWebhookResponse</a></code>

Methods:

- <code title="post /monitors/search-pump-fun">client.monitors.<a href="./src/resources/monitors.ts">createPumpFunMonitor</a>({ ...params }) -> MonitorCreatePumpFunMonitorResponse</code>
- <code title="post /monitors/user-following">client.monitors.<a href="./src/resources/monitors.ts">createUserFollowingMonitor</a>({ ...params }) -> MonitorCreateUserFollowingMonitorResponse</code>
- <code title="post /monitors/user-profile">client.monitors.<a href="./src/resources/monitors.ts">createUserProfileMonitor</a>({ ...params }) -> MonitorCreateUserProfileMonitorResponse</code>
- <code title="post /monitors/user-tweets">client.monitors.<a href="./src/resources/monitors.ts">createUserTweetsMonitor</a>({ ...params }) -> MonitorCreateUserTweetsMonitorResponse</code>
- <code title="delete /monitors/{monitor_id}">client.monitors.<a href="./src/resources/monitors.ts">deleteMonitor</a>(monitorID) -> MonitorDeleteMonitorResponse</code>
- <code title="get /monitors/{monitor_id}">client.monitors.<a href="./src/resources/monitors.ts">getMonitor</a>(monitorID) -> MonitorGetMonitorResponse</code>
- <code title="get /monitors">client.monitors.<a href="./src/resources/monitors.ts">listMonitors</a>({ ...params }) -> MonitorListMonitorsResponse</code>
- <code title="patch /monitors/{monitor_id}">client.monitors.<a href="./src/resources/monitors.ts">setMonitorWebhook</a>(monitorID, { ...params }) -> MonitorSetMonitorWebhookResponse</code>
