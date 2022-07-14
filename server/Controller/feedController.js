const user = required("../model/feedItem") 
console.log('controller running!');

currentStories[0] = new feedItem("Story 1", "This is the body of story 1.", "https://news.google.com/", "images/news_pic.jpg" );
currentStories[1] = new feedItem("Story 2", "This is the body of story 2.", "http://my.marist.edu", "images/campus.png" );
currentStories[2] = new feedItem("Story 3", "This is the body of story 3.", "http://my.marist.edu/academics", "images/hancock.jpeg" ); 

let feedItem = [];

feedItem.push(feedItem1);
feedItem.push(feedItem2);
feedItem.push(feedItem3);

exports.getFeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
}

exports.saveFeedItem = (req, res) => {
    let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    feedItem.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
}

exports.getFeedItem = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem[req.params.feedItemID]);
}

exports.deleteFeedItem = function(req, res) {
    feeditems.splice(req.params.feedItemID, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem);
}

exports.updateFeedItem = function(req, res) {
    var updatedFeedItem = feedItem[req.params.feedItemID];
    console.log(req.body.title);
    if(req.body.title)
        updatedFeedItem.title = req.body.title;
    if(req.body.body)
        updatedFeedItem.body = req.body.body;
    if(req.body.linkUrl)
        updatedFeedItem.linkUrl = req.body.linkUrl; 
    if(req.body.imageUrl)
        updatedFeedItem.imageUrl = req.body.imageUrl;

    feedItem[req.params.feedItemID] = updatedFeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(feedItem[req.params.feedItemID]);
}