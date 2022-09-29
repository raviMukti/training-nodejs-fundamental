import dns from "dns/promises"

const ip = await dns.lookup("www.persib.co.id")

console.info(ip.address);