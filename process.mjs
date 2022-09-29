import process from "process";

process.addListener("exit", (exitCode) => {
    console.info(`Node JS Exit With Code ${exitCode}`);
})

console.info(process.version);
console.table(process.env);

process.exit(1);