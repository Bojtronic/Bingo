const pool = require("../../database");
const queries = require('../queries/carton_query');


const get = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { cantidad_disponible, precio_unitario } = req.body;
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).json("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [cantidad_disponible, precio_unitario, id], (error, results) => {
            if (error) throw error;
            res.status(200).json("Actualizado exitosamente");
        });
    });
};



module.exports = {
    get,
    update
}