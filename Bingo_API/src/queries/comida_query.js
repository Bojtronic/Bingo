const get = "SELECT nombre, precio, cantidad FROM comida";
const add = "INSERT INTO comida (nombre, precio, cantidad) VALUES ($1, $2, $3)";


module.exports = {
    get,
    add
}
