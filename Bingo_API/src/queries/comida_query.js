const get = "SELECT id, nombre, cantidad, precio FROM comida";
const add = "INSERT INTO comida (nombre, cantidad, precio) VALUES ($1, $2, $3)";
const getById = "SELECT id, nombre, precio, cantidad FROM comida WHERE id = $1";
const checkIdExists = "SELECT id, nombre, cantidad, precio FROM comida WHERE id = $1";
const remove = "DELETE FROM comida";
const update = "UPDATE comida SET nombre = $1, precio = $2, cantidad = $3 WHERE id = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update
}

