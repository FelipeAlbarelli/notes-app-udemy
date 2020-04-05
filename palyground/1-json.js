const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Felipe Albarelli',
data.age += 1;

const newDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json' , newDataJSON)