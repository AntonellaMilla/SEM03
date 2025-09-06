//TAREA
/*
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


*/

// TAREA

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

writeStream.on('finish', () => {
  console.log('El archivo se ha transformado correctamente a mayúsculas y guardado como texto_mayusculas.txt');
});
