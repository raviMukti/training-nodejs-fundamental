function samplePromise(){
    return Promise.resolve("Ravi");
}

const name = await samplePromise();
console.info(name);