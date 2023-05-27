const get = "SELECT username, pass FROM usuario";
const add = "INSERT INTO usuario (username, pass) VALUES ($1, $2)";


module.exports = {
    get,
    add
}
