const db = require ('../models/db');

exports.listarVentas = async (req, res) => {
    const sql = "SELECT * FROM ventas";

    try {
        const [ventas, fields] = await db.query(sql);
        res.status(200).json(ventas);
    } catch (err) {
        res.status(500).send({ mensaje: "Error en el servidor" });
    }
};

exports.listarVentasId = async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM ventas WHERE id_venta = ?";

    try {
        const [rows, fields] = await db.query(sql, [id]);

        if (rows.length === 0) {
            res.status(404).send({ mensaje: "Venta no encontrada" });
            return;
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).send({ mensaje: "Error al buscar la venta", error: err });
    }
};

exports.agregarVenta = async (req, res) => {
    const { nombre_venta, apellido_venta, email, password, id_rol } = req.body;
    const sql = "INSERT INTO ventas (nombre_venta, apellido_venta, email, password, id_rol) VALUE (?,?,?,?,?)";
    try {
        const resultado = await db.query(sql, [nombre_venta, apellido_venta, email, password, id_rol]);
        res.status(200).send({ id: resultado.idInsertado, ...req.body });
    } catch (err) {
        res.status(500).send({ error: err });
    }
};

exports.actualizarVenta = async (req, res) => {
    const id = req.params.id;
    const { nombre_venta, apellido_venta, email, password, id_rol } = req.body;

    const sql = "UPDATE ventas SET nombre_venta = ? WHERE id_venta = ?"
                "SET monto_total = cantidad * precio_unitario";

    try {
        await db.query(sql, [nombre_venta, apellido_venta, email, password, id_rol]);
        res.status(200).send({ mensaje: "Venta actualizada" });
    } catch (err) {
        res.status(500).send({ mensaje: "Error al actualizar la venta", error: err });
    }
};

exports.eliminarVenta = async (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM ventas WHERE id_venta = ?";

    try {
        await db.query(sql, [id]);
        res.status(200).send({ mensaje: "Venta eliminada" });
    } catch (err) {
        res.status(500).send({ mensaje: "Error al eliminar la venta", error: err });
    }
};
