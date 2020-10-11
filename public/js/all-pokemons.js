let offset = 1;
let limit = 850;
let currentPage = 1;


function updateInfo() {
    document.querySelector("#info").innerHTML = `${offset} à ${limit}`;
}

function getList(offset, limit) {
    // clearing the display
    document.querySelector("main").innerHTML = "";

    for (let i = offset; i < limit; i++) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        .then(response => response.json())
        .then(data => {
            // console.log(data.types);

            document.querySelector("main").innerHTML += `
                <li>${data.name}</li>
            `;
        })
        .catch(error => console.error(error));
    }
    updateInfo();
}

getList(offset, limit);

