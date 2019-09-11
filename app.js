const http = require("http");

 function init(){
     function onRequest(request, response){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<h1>Hola Mundo</h1>")
        response.end();
     }

     http.createServer(onRequest).listen(1111);
 }
init();
//exports.init = init;