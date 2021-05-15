var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection',(socket)=>{
    console.log("ONLINE");
    socket.on('canvas-data',(data)=>{

        socket.broadcast.emit('canvas-data',data);
    })
})

var server_port = 5000;
http.listen(server_port,()=>{
    console.log("started at :"+ server_port);

})