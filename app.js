const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoriaRoutes');
const productosRoutes = require('./routes/productosRoutes');
const estadosRoutes = require('./routes/estadosRoutes');
const marcasRoutes = require('./routes/marcasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/categorias', categoriaRoutes);
app.use('/productos', productosRoutes);
app.use('/estados', estadosRoutes);
app.use('/marcas', marcasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/roles', rolesRoutes);
app.use('/ventas' ,  ventasRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});