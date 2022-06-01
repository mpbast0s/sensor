const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('conecctando.html'); // o módulo fs lê o arquivo HTML e transforma em uma variável

//parte de ler a porta do arduino:
const { SerialPort } = require('serialport'); //chma o módulo serial port 
const { ReadlineParser } = require('@serialport/parser-readline');

const port = new SerialPort({ 
    path: 'COM3', //verifique se a porta está certa
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false 
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' })); //delimita onde começa e termina a linha


// Criando um servidor:
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

//Parte do socket.io:
const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log('Node is listening to port');
});

parser.on('data', function(data) {
    console.log('Received data from port: ' + data);
    io.emit('data', data);
}); 

//abrindo na porta:
server.listen(3000);

export default server;