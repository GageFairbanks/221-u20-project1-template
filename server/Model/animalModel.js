function animalModel (title, body, size) {
    this.title = title;
    this.body = body;
    this.size = size;
}
console.log('model running!');

exports.createAnimalModel = (title, body, size) => {
    return new animalModel(title, body, size);
}