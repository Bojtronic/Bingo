const get = "SELECT precio, cantidad FROM carton";
const add = "INSERT INTO carton (precio, cantidad) VALUES ($1, $2)";


module.exports = {
    get,
    add
}
