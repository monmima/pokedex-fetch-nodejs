// left button
document.querySelector("#left").addEventListener("click", function() {
    console.log("left button clicked");

    // si on n'est pas déjà à la première page
    if (offset !== 1) {
        if (offset - 20 >= 1) {
            offset = offset - 20;
        }
    
        if (limit - 20 >= 21) {
            limit = limit - 20;
        }
    
        // console.log(offset, limit);
    
        getList(offset, limit);
    }
});

// right button
document.querySelector("#right").addEventListener("click", function() {
    console.log("right button clicked");

    if (offset + 20 <= 861) {
        offset = offset + 20;
    }

    if (limit + 20 <= 881) {
        limit = limit + 20;
    }

    // console.log(offset, limit);

    getList(offset, limit);
});

// search form
document.querySelector("button[type=submit]").addEventListener("click", function(e) {
    e.preventDefault();

    let pokemonToSearch = document.querySelector("input[type=text]").value
        .toLowerCase()
        .trim();

    // Le Pokémon est-il dans la liste?
    const isPokemonInArray = pokemonSpecies.includes(pokemonToSearch);

    /**
     * if such a species exist, charge the description page
     */
    if (isPokemonInArray || pokemonToSearch >=1 && pokemonToSearch <= 893) {
        // alert(pokemonToSearch);
        window.location.replace(`${window.location.pathname}${pokemonToSearch}`);
    } else {
        alert("Pokémon introuvable...");
    }

    // window.location.replace(`${window.location.pathname}${pokemonToSearch}`);
});

// génère événements du menu select
for (let i = 1; i < 881; i = i + 20) {
    
    let offset = i;
    let limit = i + 20;

    document.querySelector(".dropdown-content").innerHTML += `
        <a href="#" onclick="offset=${offset}; limit=${limit}; getList(${offset}, ${limit});">${offset} à ${limit}</a>
    `;
}

