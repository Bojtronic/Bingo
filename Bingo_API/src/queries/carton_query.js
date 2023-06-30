const get = "SELECT id, precio_unitario, cantidad_disponible FROM carton";
const update = "UPDATE carton SET id=$1, precio_unitario=$2, cantidad_disponible=$3 WHERE id = $4";
const getById = "SELECT id, precio_unitario, cantidad_disponible FROM carton WHERE id = $1";



module.exports = {
    get,
    update,
    getById
}
