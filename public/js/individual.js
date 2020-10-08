
let myLocation = window.location.pathname;

// myLocation = myLocation.length - 1;

myLocation = myLocation.split("/");

// last item in the array
myLocation = myLocation[myLocation.length - 1];

getOnePokemon(myLocation);

// console.log(myLocation);

function getOnePokemon(whatPokemon) {

    // main fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${whatPokemon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.types[0].type.name);

        let pokeType;

        if (data.types.length === 1) {
            pokeType = `${data.types[0].type.name}`;
            console.log(data.types.length);
        } else {
            pokeType = `${data.types[0].type.name} et ${data.types[1].type.name}`;
            console.log(data.types.length);
        }

        document.querySelector("main").innerHTML += 
        `<div>
            <div><img src="${data.sprites.front_default}" alt="${data.name}"></div>
            <div>
                <div>${data.name}</div>
                <div>Type: ${pokeType}</div>
            </div>
        </div>`;

        // console.log(data.id);

        // nested fetch
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${data.id}/`)
        .then(response => response.json())
        .then(data2 => {

            if (data2.chain.evolves_to[0]) {
                console.log(data2.chain.evolves_to[0].species.name);

                document.querySelector("main").innerHTML += 
                `<div>${data2.chain.evolves_to[0].species.name}</div>`;

            } else {
                console.log("Aucune évolution pour ce pokémon!");
            }

        })
        .catch(error => console.error(error));
        // end of nested fetch
    })
    .catch(error => console.error(error));
    // end of main fetch

}
