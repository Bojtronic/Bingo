const get = "SELECT id, precio_unitario, cantidad_disponible FROM carton";
const update = "UPDATE carton SET cantidad_disponible = $1 WHERE id = $2";
const getById = "SELECT id, precio_unitario, cantidad_disponible FROM carton WHERE id = $1";



module.exports = {
    get,
    update,
    getById
}
