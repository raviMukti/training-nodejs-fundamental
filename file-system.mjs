// import fs from "fs"

// const buffer = fs.readFileSync("file-system.mjs");
// console.info(buffer.toString());

// fs.writeFileSync("temp.txt", "Hello World");

import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");
console.log(buffer.toString());

await fs.writeFile("temp2.txt", "Hello World 2");