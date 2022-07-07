document.getElementById('portal_button').addEventListener('mouseup', () => goToLocation('http://my.marist.edu'));
function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

var currentStories = [];
currentStories[0] = new feedItem("Story 1", "This is the body of story 1.", "https://news.google.com/", "images/news_pic.jpg" );
currentStories[1] = new feedItem("Story 2", "This is the body of story 2.", "http://my.marist.edu", "images/campus.png" );
currentStories[2] = new feedItem("Story 3", "This is the body of story 3.", "http://my.marist.edu/academics", "images/hancock.jpeg" );

var storyLink;

function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML += "<hr>" + "<div>" + feedItem.title + "</div>" + "<div>" + feedItem.body + "</div>" + "<img class='feedImage' src='" + feedItem.imageUrl + "'>\n<p><a href='" + feedItem.linkUrl + "'>story link</a>";
}

window.addEventListener('load', () => {
    for (let i = 0; i < currentStories.length; i++) {
        displayItem(currentStories[i]);
    }
});