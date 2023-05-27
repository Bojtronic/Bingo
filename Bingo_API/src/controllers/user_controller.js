const pool = require("../../database");
const queries = require('../queries/user_query');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, bmi } = req.body;
    pool.query(queries.add, [cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, bmi], (error, results) => {
        if (error) throw error;
        res.status(201).json('creado exitosamente');
    });
};



module.exports = {
    get,
    add
}