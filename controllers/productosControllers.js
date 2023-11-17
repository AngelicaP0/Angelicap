const db = require('../models/db');

exports.listarProductos = async (req, res) => {
  const sql = "SELECT p.nombre_producto AS Producto, p.Imagen, p.Precio, estados.nombre_estado AS Estado, categorias.nombre_categoria AS Categoria, p.id_producto, p.stock" +
              " FROM productos as p" +
              " INNER JOIN categorias ON p.id_categoria = categorias.id_categoria" +
              " INNER JOIN estados ON p.id_estado = estados.id_estado";
  try {
    const [productos, fields] = await db.query(sql);
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).send({ mensaje: "Error en el servidor", error: err });
  }
};
exports.listarProductosId = async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM productos WHERE id_producto = ?";
    //console.log(id);
  
    try {
      const [rows, fields] = await db.query(sql, [id]);
  
      if (rows.length === 0) {
        res.status(404).send({ mensaje: "Producto no encontrado" });
        return;
      }
      res.status(200).json(rows[0]);
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al buscar el producto" , error: err });
    }
  };
    exports.agregarProducto = async (req, res) => {
    const { nombre_producto,precio, descripcion, imagen, id_categoria, id_marca, id_estado, id_producto} = req.body;
    const sql = "INSERT INTO productos (nombre_producto, precio, descripcion, imagen, id_categoria, id_marca, id_estado, id_producto) VALUE (?,?,?,?,?,?,?,?)";
  
    try {
      const resultado = await db.query(sql, [nombre_producto, precio, descripcion, imagen, id_categoria, id_marca, id_estado, id_producto]);
      res.status(200).send({ id: resultado.idInsertado, ...req.body });
    } catch (err) {
      console.log (err)  
      res
        .status(500)
        .send({ mensaje: "Error al insertar el producto" , error: err });
    }
  };
  exports.actualizarProducto = async (req, res) => {
    const id = req.params.id;
    const { nombre_producto } = req.body;
  
    const sql =
      "UPDATE producto SET nombre_producto = ? WHERE id_producto = ?";
  
    try {
      await db.query(sql, [nombre_producto, id]);
      res.status(200).send({ mensaje: "Producto actualizada" });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al actualizar el producto" }, { error: err });
    }
  };
  exports.eliminarProducto = async (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM producto WHERE id_producto = ?";
  
    try {
      await db.query(sql, [id]);
      res.status(200).send({ mensaje: "Producto eliminado" });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al eliminar el producto" }, { error: err });
    }
  };