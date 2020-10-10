
function getCurrentPage() {
    let myLocation = window.location.pathname; // current URL
    myLocation = myLocation.split("/");
    myLocation = myLocation[myLocation.length - 1]; // last item in the array
    return myLocation;
}

function getOnePokemonInfo(whatPokemon) {
    // main fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${whatPokemon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.types[0].type.name);
        console.log(data.id);

        let pokeType;

        if (data.types.length === 1) {
            pokeType = `${data.types[0].type.name}`;
            console.log(data.types.length);
        } else {
            pokeType = `${data.types[0].type.name}, ${data.types[1].type.name}`;
            console.log(data.types.length);
        }

        document.querySelector("main").innerHTML += 
        `
            <div>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            </div>
            <div>${data.name}</div>
            <div>Type: ${pokeType}</div>
        `;

        // outer nested fetch
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`)
        .then(response => response.json())
        .then(data2 => {
            
            console.log(data2.evolution_chain.url);

            // inner nested fetch
            fetch(data2.evolution_chain.url)
            .then(response => response.json())
            .then(data3 => {
                
                // console.log(data3.chain.species.name);
                // console.log(data3.chain.evolves_to[0].species.name);
                // console.log(data3.chain.evolves_to[0].evolves_to[0].species.name);

                let arrayEvo = [
                    data3.chain.species.name,
                    data3.chain.evolves_to[0].species.name,
                ]

                // push a third element to the array if it's not undefined
                if (data3.chain.evolves_to[0].evolves_to[0]) {
                    arrayEvo.push(data3.chain.evolves_to[0].evolves_to[0].species.name);
                }

                console.log(arrayEvo);

                return arrayEvo;

            })
            .catch(error => console.error(error));
            // end of inner nested fetch

        })
        .catch(error => console.error(error));
        // end of outer nested fetch
    })
    .catch(error => console.error(error));
    // end of main fetch

}

const currentPokemon = getCurrentPage();
getOnePokemonInfo(currentPokemon);
