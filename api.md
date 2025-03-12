# Twitter

Types:

- <code><a href="./src/resources/twitter/twitter.ts">TweetsResponse</a></code>
- <code><a href="./src/resources/twitter/twitter.ts">UsersWithoutCursorResponse</a></code>
- <code><a href="./src/resources/twitter/twitter.ts">TwitterSpaceRetrieveResponse</a></code>

Methods:

- <code title="get /twitter/space/{space_id}">client.twitter.<a href="./src/resources/twitter/twitter.ts">spaceRetrieve</a>(spaceID) -> unknown</code>
- <code title="get /twitter/thread/{thread_id}">client.twitter.<a href="./src/resources/twitter/twitter.ts">threadRetrieve</a>(threadID, { ...params }) -> TweetsResponse</code>
- <code title="post /twitter/users-by-ids">client.twitter.<a href="./src/resources/twitter/twitter.ts">usersCreateByIDs</a>({ ...params }) -> UsersWithoutCursorResponse</code>
- <code title="post /twitter/users-by-usernames">client.twitter.<a href="./src/resources/twitter/twitter.ts">usersCreateByUsernames</a>({ ...params }) -> UsersWithoutCursorResponse</code>

## SearchResults

Methods:

- <code title="get /twitter/search">client.twitter.searchResults.<a href="./src/resources/twitter/search-results.ts">retrieve</a>({ ...params }) -> TweetsResponse</code>

## User

Types:

- <code><a href="./src/resources/twitter/user/user.ts">Error</a></code>
- <code><a href="./src/resources/twitter/user/user.ts">User</a></code>
- <code><a href="./src/resources/twitter/user/user.ts">UserResponse</a></code>
- <code><a href="./src/resources/twitter/user/user.ts">UsersResponse</a></code>
- <code><a href="./src/resources/twitter/user/user.ts">UserListListsResponse</a></code>
- <code><a href="./src/resources/twitter/user/user.ts">UserRetrieveExtendedBioResponse</a></code>

Methods:

- <code title="get /twitter/user/{user_id}/affiliates">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listAffiliates</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{user_id}/followers">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listFollowers</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{user_id}/highlights">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listHighlights</a>(userID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/lists">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listLists</a>(userID, { ...params }) -> UserListListsResponse</code>
- <code title="get /twitter/user/{username}/mentions">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listMentions</a>(username, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/tweets">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listTweets</a>(userID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/tweets-and-replies">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listTweetsAndReplies</a>(userID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/user/{user_id}/verified-followers">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">listVerifiedFollowers</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{user_id}">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">retrieveByID</a>(userID) -> UserResponse</code>
- <code title="get /twitter/user/{username}">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">retrieveByUsername</a>(username) -> UserResponse</code>
- <code title="get /twitter/user/{username}/extended-bio">client.twitter.user.<a href="./src/resources/twitter/user/user.ts">retrieveExtendedBio</a>(username) -> UserRetrieveExtendedBioResponse</code>

### Following

Types:

- <code><a href="./src/resources/twitter/user/following.ts">FollowingVerifyRelationshipResponse</a></code>

Methods:

- <code title="get /twitter/user/{user_id}/following">client.twitter.user.following.<a href="./src/resources/twitter/user/following.ts">list</a>(userID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/user/{source_user_id}/following/{target_user_id}">client.twitter.user.following.<a href="./src/resources/twitter/user/following.ts">verifyRelationship</a>(targetUserID, { ...params }) -> FollowingVerifyRelationshipResponse</code>

## Tweets

Types:

- <code><a href="./src/resources/twitter/tweets/tweets.ts">Tweet</a></code>
- <code><a href="./src/resources/twitter/tweets/tweets.ts">TweetRetrieveResponse</a></code>

Methods:

- <code title="get /twitter/tweets/{tweet_id}">client.twitter.tweets.<a href="./src/resources/twitter/tweets/tweets.ts">retrieve</a>(tweetID) -> TweetRetrieveResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/comments">client.twitter.tweets.<a href="./src/resources/twitter/tweets/tweets.ts">listComments</a>(tweetID, { ...params }) -> TweetsResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/quotes">client.twitter.tweets.<a href="./src/resources/twitter/tweets/tweets.ts">listQuotes</a>(tweetID, { ...params }) -> TweetsResponse</code>

### RetweetedBy

Types:

- <code><a href="./src/resources/twitter/tweets/retweeted-by.ts">RetweetedByVerifyUserResponse</a></code>

Methods:

- <code title="get /twitter/tweets/{tweet_id}/retweeted_by">client.twitter.tweets.retweetedBy.<a href="./src/resources/twitter/tweets/retweeted-by.ts">list</a>(tweetID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/tweets/{tweet_id}/retweeted_by/{user_id}">client.twitter.tweets.retweetedBy.<a href="./src/resources/twitter/tweets/retweeted-by.ts">verifyUser</a>(userID, { ...params }) -> RetweetedByVerifyUserResponse</code>

### CommentedBy

Types:

- <code><a href="./src/resources/twitter/tweets/commented-by.ts">CommentedByVerifyUserResponse</a></code>

Methods:

- <code title="get /twitter/tweets/{tweet_id}/commented_by/{user_id}">client.twitter.tweets.commentedBy.<a href="./src/resources/twitter/tweets/commented-by.ts">verifyUser</a>(userID, { ...params }) -> CommentedByVerifyUserResponse</code>

## List

Types:

- <code><a href="./src/resources/twitter/list.ts">ListRetrieveResponse</a></code>

Methods:

- <code title="get /twitter/list/{list_id}">client.twitter.list.<a href="./src/resources/twitter/list.ts">retrieve</a>(listID) -> unknown</code>
- <code title="get /twitter/list/{list_id}/members">client.twitter.list.<a href="./src/resources/twitter/list.ts">listMembers</a>(listID, { ...params }) -> UsersResponse</code>
- <code title="get /twitter/list/{list_id}/tweets">client.twitter.list.<a href="./src/resources/twitter/list.ts">listTweets</a>(listID, { ...params }) -> TweetsResponse</code>

## Community

Types:

- <code><a href="./src/resources/twitter/community.ts">CommunityListMembersResponse</a></code>

Methods:

- <code title="get /twitter/community/{community_id}/members">client.twitter.community.<a href="./src/resources/twitter/community.ts">listMembers</a>(communityID, { ...params }) -> CommunityListMembersResponse</code>
- <code title="get /twitter/community/{community_id}/tweets">client.twitter.community.<a href="./src/resources/twitter/community.ts">listTweets</a>(communityID, { ...params }) -> TweetsResponse</code>

# User

Types:

- <code><a href="./src/resources/user.ts">UserGetBalanceResponse</a></code>
- <code><a href="./src/resources/user.ts">UserSetGlobalWebhookResponse</a></code>

Methods:

- <code title="post /user/balance">client.user.<a href="./src/resources/user.ts">getBalance</a>() -> UserGetBalanceResponse</code>
- <code title="post /user/webhook">client.user.<a href="./src/resources/user.ts">setGlobalWebhook</a>({ ...params }) -> UserSetGlobalWebhookResponse</code>

# Monitors

Types:

- <code><a href="./src/resources/monitors.ts">Monitor</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreatePumpFunMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreateUserFollowingMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreateUserProfileMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorCreateUserTweetsMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorDeleteMonitorResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorListActiveMonitorsResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorRetrieveMonitorDetailsResponse</a></code>
- <code><a href="./src/resources/monitors.ts">MonitorUpdateMonitorWebhookResponse</a></code>

Methods:

- <code title="post /monitors/search-pump-fun">client.monitors.<a href="./src/resources/monitors.ts">createPumpFunMonitor</a>({ ...params }) -> MonitorCreatePumpFunMonitorResponse</code>
- <code title="post /monitors/user-following">client.monitors.<a href="./src/resources/monitors.ts">createUserFollowingMonitor</a>({ ...params }) -> MonitorCreateUserFollowingMonitorResponse</code>
- <code title="post /monitors/user-profile">client.monitors.<a href="./src/resources/monitors.ts">createUserProfileMonitor</a>({ ...params }) -> MonitorCreateUserProfileMonitorResponse</code>
- <code title="post /monitors/user-tweets">client.monitors.<a href="./src/resources/monitors.ts">createUserTweetsMonitor</a>({ ...params }) -> MonitorCreateUserTweetsMonitorResponse</code>
- <code title="delete /monitors/{monitor_id}">client.monitors.<a href="./src/resources/monitors.ts">deleteMonitor</a>(monitorID) -> MonitorDeleteMonitorResponse</code>
- <code title="get /monitors">client.monitors.<a href="./src/resources/monitors.ts">listActiveMonitors</a>({ ...params }) -> MonitorListActiveMonitorsResponse</code>
- <code title="get /monitors/{monitor_id}">client.monitors.<a href="./src/resources/monitors.ts">retrieveMonitorDetails</a>(monitorID) -> MonitorRetrieveMonitorDetailsResponse</code>
- <code title="patch /monitors/{monitor_id}">client.monitors.<a href="./src/resources/monitors.ts">updateMonitorWebhook</a>(monitorID, { ...params }) -> MonitorUpdateMonitorWebhookResponse</code>
