import fs from 'fs';

// const fs = require('fs');

const readFrom = pathToFile => fs.readFileSync(pathToFile, 'utf8');

const writeTo = (pathToFile, data) => {
  const fileToWrite = fs.createWriteStream(pathToFile, 'utf8');
  fileToWrite.write(data);
};

export { readFrom, writeTo };
