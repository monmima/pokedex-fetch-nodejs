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

    if (offset + 20 <= 1040) {
        offset = offset + 20;
    }

    if (limit + 20 <= 1040) {
        limit = limit + 20;
    }

    // console.log(offset, limit);

    getList(offset, limit);
});

// search form
document.querySelector("button[type=submit]").addEventListener("click", function(e) {
    e.preventDefault();

    let pokemonToSearch = document.querySelector("input[type=text]").value;


    window.location.replace(`${window.location.pathname}${pokemonToSearch}`);
});

