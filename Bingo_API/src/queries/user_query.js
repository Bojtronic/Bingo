const get = "SELECT userName, pass FROM usuario";
const add = "INSERT INTO usuario (userName, pass) VALUES ($1, $2)";


module.exports = {
    get,
    add
}
