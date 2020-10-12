let offset = 1;
let limit = 21;
let currentPage = 1;


function updateInfo() {
    document.querySelector("#info").innerHTML = `${offset} à ${limit}`;
    console.log(`${offset} à ${limit}`);
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
                <figure class="card card-flex">
                    <img class="image-pokemon" src="${data.sprites.front_default}" alt="${data.name}">
                    <div class="card-body">
                        <figcaption class="card-title">
                            <a href="/${data.name}">${data.name}</a>
                        </figcaption>
                    </div>
                </figure>
            `;
        })
        .catch(error => console.error(error));
    }
    updateInfo();
}

getList(offset, limit);

