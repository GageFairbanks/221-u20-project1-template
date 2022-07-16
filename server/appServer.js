const express = require('express')
const bodyPaser = require('body-parser');
const app = express();
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

//feed item
let feedController = require('./Controller/feedController');

app.route('/api/feedItem')
    .get(feedController.getFeedItem)
    .post(feedController.saveFeedItem);

app.route('/api/feedItem/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.updateFeedItem);

//animal model
let animalController = require('./Controller/animalController');

app.route('/api/animalModel')
    .get(animalController.getAnimalModel)
    .post(animalController.saveAnimalModel);

app.route('/api/animlModel/:animalModelId')
    .get(animalController.getAnimalModel)
    .delete(animalController.deleteAnimalModel)
    .patch(animalController.updateAnimalModel)
    .put(animalController.updateAnimalModel);

app.listen(1337, () => console.log('Listening on port 1337.'))
