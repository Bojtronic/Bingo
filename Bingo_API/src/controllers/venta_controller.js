const pool = require("../../database");
const queries = require('../queries/venta_query');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { producto, cantidad, total } = req.body;
    pool.query(queries.add, [producto, cantidad, total], (error, results) => {
        if (error) throw error;
        res.status(201).json('creado exitosamente');
    });
};



module.exports = {
    get,
    add
}