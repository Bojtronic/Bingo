const get = "SELECT id, producto, cantidad, total FROM venta";
const add = "INSERT INTO venta (producto, cantidad, total) VALUES ($1, $2, $3)";


module.exports = {
    get,
    add
}
