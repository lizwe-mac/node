const names = {
    name1:"MacDonald Ginyani",
    name2:"Peter Monda",
    name3:"Simon Chickwetu"
}

function printNames(){
    Object.values(names).forEach(element => {
        console.log(element)
    });
}

printNames();