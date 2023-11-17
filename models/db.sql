-- Tabla productos
-- nombre_producto, precio, descripcion, imagen, id_categoria, id_marca, id_estado
CREATE TABLE productos (
    id_producto INT NOT NULL AUTO_INCREMENT,
    nombre_producto VARCHAR(45) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    stock INT NOT NULL,
    id_categoria INT NOT NULL,
    id_marca INT NOT NULL,
    id_estado INT NOT NULL,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
    FOREIGN KEY (id_marca) REFERENCES marcas(id_marca),
    FOREIGN KEY (id_estado) REFERENCES estados(id_estado)
)
-- Tabla categoria
-- nombre categoria
CREATE TABLE categorias (
    id_categoria INT NOT NULL AUTO_INCREMENT,
    nombre_categoria VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_categoria)
);
-- Table marcas
-- nombre_marca
CREATE TABLE marcas (
    id_marca INT NOT NULL AUTO_INCREMENT,
    nombre_marca VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_marca)
);
-- Tabla estados
-- nombre_estado
CREATE TABLE estados (
    id_estado INT NOT NULL AUTO_INCREMENT,
    nombre_estado VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_estado)
);
-- Tabla usuarios
-- nombre_usuario, apellido_usuario, email, password, id_rol
CREATE TABLE usuarios (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre_usuario VARCHAR(45) NOT NULL,
    apellido_usuario VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    id_rol INT NOT NULL,
    PRIMARY KEY (id_usuario),
    FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);
-- Tabla roles
-- nombre_rol
CREATE TABLE roles (
    id_rol INT NOT NULL AUTO_INCREMENT,
    nombre_rol VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_rol)
);
-- Tabla ventas
-- id_usuario, id_producto, cantidad, fecha_venta
CREATE TABLE ventas (
    id_venta INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    fecha_venta TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_venta),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);