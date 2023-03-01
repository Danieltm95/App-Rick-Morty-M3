const fetch = require('node-fetch')

 let getCharDetail = (res, ID) => {
 console.log(ID)
    fetch(` https://rickandmortyapi.com/api/character/${ID}`)
        .then((response) => response.json())
        .then((data) => {

            // console.log(data)
            let char = {
                id: data.id,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin
            }
            res.end(JSON.stringify(char));
        })
        .catch((error) => {
            res.writeHead(200, { 'Content-Type' : 'text/plain'})
            res.end(error.message)})


};

module.exports = getCharDetail;