-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2024 a las 07:11:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_hotel_hc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuartos`
--

CREATE TABLE `cuartos` (
  `id_cuarto` int(11) NOT NULL,
  `numero_cuarto` varchar(10) NOT NULL,
  `tipo_cuarto` varchar(50) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT 1
)


INSERT INTO `cuartos` (`id_cuarto`, `numero_cuarto`, `tipo_cuarto`, `precio`, `disponible`) VALUES
(1, '101', 'Simple', 50.00, 1),
(2, '102', 'Doble', 75.00, 1),
(3, '103', 'Suite', 120.00, 1);

CREATE TABLE `reservaciones` (
  `id_reservacion` int(11) NOT NULL,
  `id_cuarto` int(11) DEFAULT NULL,
  `nombre_cliente` varchar(100) DEFAULT NULL,
  `email_cliente` varchar(100) DEFAULT NULL,
  `telefono_cliente` varchar(20) DEFAULT NULL,
  `ingreso` date DEFAULT NULL,
  `salida` date DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `cantidad_huespedes` int(11) DEFAULT NULL,
  `comentarios_especiales` text DEFAULT NULL,
  `codigo_promocional` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `fecha_registro` datetime NOT NULL DEFAULT current_timestamp()
)

INSERT INTO `reservaciones` (`id_reservacion`, `id_cuarto`, `nombre_cliente`, `email_cliente`, `telefono_cliente`, `ingreso`, `salida`, `notas`, `cantidad_huespedes`, `comentarios_especiales`, `codigo_promocional`, `activo`, `fecha_registro`) VALUES
(1, 1, 'Juan Perez', 'juan.perez@example.com', '555-1234', '2024-10-01', '2024-10-05', NULL, 2, 'Cama extra', 'DESCUENTO2024', 1, '2024-09-25 12:54:00'),
(2, 2, 'Kassandra Moo', NULL, NULL, '2024-09-26', '2024-10-05', NULL, NULL, NULL, NULL, NULL, '2024-09-25 12:54:00'),
(3, 1, 'Juana Perez', 'juan.perez@example.com', '555-1234', '2024-10-01', '2024-10-05', 'Prefiere vista al mar', 2, 'Cama extra', 'DESCUENTO2024', 1, '2024-09-25 18:05:23');

--
ALTER TABLE `cuartos`
  ADD PRIMARY KEY (`id_cuarto`);


ALTER TABLE `reservaciones`
  ADD PRIMARY KEY (`id_reservacion`),
  ADD KEY `id_cuarto` (`id_cuarto`);


ALTER TABLE `cuartos`
  MODIFY `id_cuarto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `reservaciones`
  MODIFY `id_reservacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `reservaciones`
  ADD CONSTRAINT `reservaciones_ibfk_1` FOREIGN KEY (`id_cuarto`) REFERENCES `cuartos` (`id_cuarto`) ON DELETE CASCADE;
COMMIT;