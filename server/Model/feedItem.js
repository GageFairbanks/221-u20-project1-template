// the main function that helps control the title, body, link, and image
function feedItem (title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}
console.log('model running!');
// returns the title the body the link and the image
exports.createFeedItem = (title, body, linkUrl, imageUrl) => {
    return new feedItem(title, body, linkUrl, imageUrl);
}
