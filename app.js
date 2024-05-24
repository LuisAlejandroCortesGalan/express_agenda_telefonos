// Cargar los módulos
const express = require('express');
const app = express();
// Imporatado las rutas
const rutas = require('./rutas')
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(rutas);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});

