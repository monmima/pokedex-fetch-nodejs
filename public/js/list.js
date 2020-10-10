let offset = 1;
let limit = 21;
let currentPage = 1;

function getList(offset, limit) {
    // clearing the display
    document.querySelector("main").innerHTML = "";

    for (let i = offset; i < limit; i++) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        .then(response => response.json())
        .then(data => {
            console.log(data.types);
    
            document.querySelector("main").innerHTML += 
            `<div>
                <div><img src="${data.sprites.front_default}" alt="${data.name}"></div>
                <div>
                    <div><a href="/${data.name}">${data.name}</a></div>
                </div>
            </div>`;
    
        })
        .catch(error => console.error(error));
    }

    updateInfo();
}

function updateInfo() {
    document.querySelector("#info").innerHTML = `${offset} to ${limit}`;
}

getList(offset, limit);

