//the main function that helps control the data
function animalModel (title, body, size) {
    this.title = title;
    this.body = body;
    this.size = size;
}
console.log('model running!');
// returns the title body and size
exports.createAnimalModel = (title, body, size) => {
    return new animalModel(title, body, size);
}
