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
    
        console.log(offset, limit);
    
        getList(offset, limit);
    }


});

document.querySelector("#right").addEventListener("click", function() {
    console.log("right button clicked");

    if (offset + 20 <= 1040) {
        offset = offset + 20;
    }

    if (limit + 20 <= 1040) {
        limit = limit + 20;
    }

    console.log(offset, limit);

    getList(offset, limit);

});

