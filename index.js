/*
const fs = require('fs');
const readable = fs.createReadStream('datos.txt', { encoding: 'utf8' });
readable.on('data', chunk => console. log('Fragmento recibido:', chunk));
readable.on('end', () => console. log('Lectura completa'));
readable.on('error', err => console.error('Error:', err));

//ESCRITURA EN UN ARCHIVO USANDO STREAMS
const fs = require('fs');
const writable = fs.createWriteStream('salida.txt');
writable.write('Este es un mensaje de prueba.\n');
writable.end('Fin del mensaje.');
writable.on('finish', () => console. log('Escritura completada.'));


//COMPRESION CON PIPES
const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('entrada.txt');
const writeStream = fs.createWriteStream('entrada.txt.gz');
const gzip = zlib.createGzip();
readStream.pipe(gzip).pipe(writeStream);




//Actividad 4: Manejo de Errores y Backpressure

const fs = require('fs');
const readable = fs.createReadStream('datos.txt', { encoding: 'utf8' });
const writable = fs.createWriteStream('salida.txt');
//codigo anterior


readable. on('data', chunk => {
    if (!writable.write(chunk)) {
        console.log('pause');
        readable.pause() ;
    }

});
writable.on('drain', () => {
    console.log('resume');
    readable.resume();
});


*/

//TAREA

const { Transform } = require('stream');
const fs = require('fs');

const transformStream = new Transform({
transform(chunk, encoding, callback) {
callback(null, chunk.toString().toUpperCase());

}

});

const readStream = fs.createReadStream('texto.txt');
const writeStream = fs.createWriteStream('texto_mayusculas.txt');

readStream.pipe(transformStream).pipe(writeStream);