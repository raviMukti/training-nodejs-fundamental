import fs from "fs"

const  writer = fs.createWriteStream("target.log")
writer.write("Ravi");
writer.write("Mukti");
writer.end();