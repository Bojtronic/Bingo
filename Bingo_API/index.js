const express = require("express");
const cors = require('cors');

const userRoute = require('./src/routes/user_route');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({ origin: '*' })); 


app.use('/api/usuarios', userRoute);

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
  respuesta.send('Bingo API');
});
