import https from "https";

const url = "https://hookb.in/aBPrMaQb0OUXdbBXLVwb";

const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(data.toString());
    })
})

const body = JSON.stringify({
    firstName: "Ravi",
    lastName: "Mukti"
})

request.write(body);
request.end();