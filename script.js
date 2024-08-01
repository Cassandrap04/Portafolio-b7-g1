//CRUD
//Crear Leer Actualizar Borrar


let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

//Usar el punto es para llamar a una propiedad o una accion del objeto

//Acciones se distinguen por los parentesis()


typewriter
    .pauseFor(2500)
    .typeString('Cassandra Cruz')
    .pauseFor(300)
    .deleteAll()
    .typeString('Estudiante de programación')
    .pauseFor(1000)
    .start();


// frase

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

//Usar el punto es para llamar a una propiedad o una accion del objeto

//Acciones se distinguen por los parentesis()


typewriterFrase
    .pauseFor(2500)
    .typeString('"Todo lo que siempre has querido está al otro lado del miedo."')
    .pauseFor(300)
    .deleteAll()
    .start();