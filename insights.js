var request = require('request');
var OAuth   = require('oauth-1.0a');

var oauth = {
        consumer_key: 'CONSUMER_KEY',
        consumer_secret: 'CONSUMER_SECRET' ,
        token: 'TOKEN',
        token_secret: 'TOKEN_SECRET' 
};

var request_data = {
	url: 'https://data-api.twitter.com/insights/engagement/28hr',
    method: 'POST',
    data: 
        '{  "tweet_ids":[                  \
                781131589249933314,        \
                780878256174161920,        \
                777632315044339712         \
            ],                             \
            "engagement_types": [          \
                "impressions",             \
                "engagements",             \
                "favorites"                \
            ],                             \
            "groupings": {                 \
                "by-id-type-hour": {       \
                    "group_by": [          \
                        "tweet.id",        \
                        "engagement.type", \
                        "engagement.hour"  \
                        ]                  \
                }                          \
            }                              \
        }' 
};

request({
	url: request_data.url,
    headers: {
        "Content-Type":"application/json",
        "Accept-Encoding":"gzip"
    },
    gzip:true,
 	method: request_data.method,
	oauth:oauth,
    body:request_data.data
    }, 
    
    function(error, response, body) {
	console.log(error);
    console.log(response);
    console.log(body);

});