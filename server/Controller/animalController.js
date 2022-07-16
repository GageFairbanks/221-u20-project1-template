const user = required("../model/animalModel") 
console.log('controller running!');
//arrays for items
currentStories[0] = new animalModel("Cat", "Small feline with fur.", "Small" );
currentStories[1] = new animalModel("Dog", "Medium canine with fur.", "Medium" );
currentStories[2] = new animalModel("Fish", "Small aquatic creature with scales.", "Very small" ); 

let animalModel = [];
//pushes the arrays
animalModel.push(animalModel1);
animalModel.push(animalModel2);
animalModel.push(animalModel3);
//all the exports send a request different data packets and act as different functions
exports.getAnimalModel = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(animalModel);
}

exports.saveAnimalModel = (req, res) => {
    let newAnimalModel = animalModel.createAnimalModel(req.body.title, req.body.body, req.body.size);
    animalModel.push(newAnimalModel);
    res.setHeader('Content-Type', 'application/json');
    res.send(animalModel);
}

exports.getAnimalModel = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(animalModel[req.params.animalModelID]);
}

exports.deleteAnimalModel = function(req, res) {
    animalModel.splice(req.params.animalModelID, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(animalModel);
}

exports.updateAnimalModel = function(req, res) {
    var updatedAnimalModel = animalModel[req.params.animalModelID];
    console.log(req.body.title);
    if(req.body.title)
        updatedAnimalModel.title = req.body.title;
    if(req.body.body)
        updatedAnimalModel.body = req.body.body;
    if(req.body.size)
        updatedAnimalModel.size = req.body.size; 

    animalModel[req.params.animalModelID] = updatedAnimalModel;

    res.setHeader('Content-Type', 'application/json');
    res.send(animalModel[req.params.animalModelID]);
}
