const pool = require("../../database");
const queries = require('../queries/compra_carton_query');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { individuales, promo_1, promo_2, total_cartones, total_a_cobrar } = req.body;
    pool.query(queries.add, [individuales, promo_1, promo_2, total_cartones, total_a_cobrar], (error, results) => {
        if (error) throw error;
        res.status(201).json('creado exitosamente');
    });
};


const getById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const remove = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).json("No existe en la base de datos");
            return;
        }
        pool.query(queries.remove, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json("Eliminado exitosamente");
        });
    });
};

const update = (req, res) => {
    const id_ = parseInt(req.params.id);
    const { id , individuales, promo_1, promo_2, total_cartones, total_a_cobrar } = req.body;
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).json("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [individuales, promo_1, promo_2, total_cartones, total_a_cobrar, id_], (error, results) => {
            if (error) throw error;
            res.status(200).json("Actualizado exitosamente");
        });
    });
};


module.exports = {
    get,
    getById,
    add,
    remove,
    update
}
