// console.log(req.query.id);

console.log("This is a random message! Hope you like it!");
console.log("This message demonstrates that JavaScript was served by the server!");

let myLocation = window.location.pathname;

// myLocation = myLocation.length - 1;
console.log(`icigo: ${myLocation}`);
myLocation = myLocation.split("/");
console.log(`icigo: ${myLocation}`);
// last item in the array
myLocation = myLocation[myLocation.length - 1];
console.log(`icigo: ${myLocation}`);

getOnePokemon(myLocation);

// console.log(myLocation);

function getOnePokemon(whatPokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${whatPokemon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector("main").innerHTML += 
        `<div>
            <div><img src="${data.sprites.front_default}" alt="${data.name}"></div>
            <div>
                <div>${data.name}</div>
                <div>EXP. ${data.base_experience}</div>
            </div>
        </div>`;
    })
    .catch(error => console.error(error));
}
