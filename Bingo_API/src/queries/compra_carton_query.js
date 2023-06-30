const get = "SELECT id , individuales, promo_1, promo_2, total_cartones, total_a_cobrar FROM compra_carton";
const add = "INSERT INTO compra_carton (individuales, promo_1, promo_2, total_cartones, total_a_cobrar) VALUES ($1, $2, $3, $4, $5)";
const getById = "SELECT id , individuales, promo_1, promo_2, total_cartones, total_a_cobrar FROM compra_carton WHERE id = $1";
const checkIdExists = "SELECT id , individuales, promo_1, promo_2, total_cartones, total_a_cobrar FROM compra_carton WHERE id = $1";
const remove = "DELETE FROM compra_carton WHERE id = $1";
const update = "UPDATE compra_carton SET individuales = $1, promo_1 = $2, promo_2 = $3, total_cartones = $4, total_a_cobrar = $5 WHERE id = $6";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update
}
