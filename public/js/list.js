console.log("This is a random message! Hope you like it!");
console.log("This message demonstrates that JavaScript was served by the server!");

for (let i = 1; i < 150; i++) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector("main").innerHTML += 
        `<div>
            <div><img src="${data.sprites.front_default}" alt="${data.name}"></div>
            <div>
                <div><a href="ejs-2/${data.name}">${data.name}</a></div>
                <div>EXP. ${data.base_experience}</div>
            </div>
        </div>`;

    })
    .catch(error => console.error(error));
}