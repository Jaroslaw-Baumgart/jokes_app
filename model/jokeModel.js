
const jokes = require("../data/jokes.json");

function getAll() {
    return new Promise( (resolve, reject) => {
        resolve(jokes);
    } );
}

function getById(id) {
    return new Promise ( (reslove, reject) => {
        const joke = jokes.find( j => j.id === parseInt(id));
    
        if (joke) {
            reslove(joke);
        } else {
            reject("Joke with id: " + id + "not found");
    }
        
    });
}

module.exports = {
    getAll,
    getById
} 