// L'emploi des majuscules dans EventEmitter est une convention indiquant qu'il s'agit d'une classe. Une classe est comme la notion d'être humain; un objet est comme une personne en particulier, comme "John", etc.

// Ci-dessous, "emit" s'emploie un peu comme dans "to emit a noise". Il faut donc conjuguer cela avec un "listener".

// Ici, l'ordre est important: "listener" d'abord; "emitter" ensuite.

// Il est aussi possible de passer des paramètres supplémentaires à l'"emitter" et au "listener". Dans l'exemple, ci-dessous, par exemple: emitter.emit("messageLogged", {id: 1, url: "http://"}) et "emitter.on("messageLogged", function(e) {";

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// argument 1: listener | argument 2: function you want to execute 
eventEmitter.on("tutorial", () => {
    console.log("Tutorial event has occurred.");
});

eventEmitter.emit("tutorial");
