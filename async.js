// function samplePromise(){
//     return Promise.resolve("Ravi");
// }

// const names = await samplePromise();
// console.info(names); Akan mengakibatkan error karena async-await hanya bisa di modules, atau function

function samplePromise(){
    return Promise.resolve("Ravi");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();