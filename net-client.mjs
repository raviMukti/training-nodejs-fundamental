import net from "net"

const connection = net.createConnection({port: 3000, host: "localhost"});

setInterval(() => {
    connection.write("Ravi\r\n");
}, 2000);

connection.addListener("data", function(data) {
    console.info(`Receive Data From Server ${data}`);
})