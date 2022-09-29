import http from "http";

const server = http.createServer((request, response) => {
    response.write("Hello World");
    response.end();
});

server.listen(3000);