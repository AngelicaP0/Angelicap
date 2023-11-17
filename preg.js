const axios = require('axios');

// URL de la API de ventas
const apiUrl = 'http://localhost:3001/ventas';

// Realizar una solicitud GET a la API
axios.get(apiUrl)
  .then(response => {
    // Verificar si la solicitud a la API fue exitosa
    if (response.status === 200) {
      const data = response.data;

      // Procesar los datos y realizar análisis en JavaScript

      // Calcular el ingreso total de todas las ventas
      const ingresoTotal = data.reduce((total, venta) => total + venta.monto_venta, 0);

      // Calcular el producto más vendido
      const productosVendidos = data.map(venta => venta.producto);
      const productoMasVendido = productosVendidos.reduce((a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b), null);

      // Calcular la categoría más vendida
      const categoriasVendidas = data.map(venta => venta.categoria);
      const categoriaMasVendida = categoriasVendidas.reduce((a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b), null);

      console.log(`Ingreso total de todas las ventas: ${ingresoTotal}`);
      console.log(`Producto más vendido: ${productoMasVendido}`);
      console.log(`Categoría más vendida: ${categoriaMasVendida}`);
    } else {
      console.error('Error al obtener datos de la API');
    }
  })
  .catch(error => {
    console.error('Error en la solicitud a la API:', error.message);
  });
