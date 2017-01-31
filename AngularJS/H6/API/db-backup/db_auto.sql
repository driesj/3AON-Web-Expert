-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2016 at 12:33 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_auto`
--
CREATE DATABASE IF NOT EXISTS `db_auto` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_auto`;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_auto`
--

DROP TABLE IF EXISTS `tbl_auto`;
CREATE TABLE `tbl_auto` (
  `id` tinyint(4) NOT NULL,
  `type_id` tinyint(4) NOT NULL,
  `omschrijving` varchar(35) NOT NULL,
  `basisprijs` decimal(10,0) NOT NULL,
  `verbruik` decimal(4,2) NOT NULL,
  `verkbelast` decimal(6,2) NOT NULL,
  `inverkbelast` decimal(4,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_auto`
--

INSERT INTO `tbl_auto` (`id`, `type_id`, `omschrijving`, `basisprijs`, `verbruik`, `verkbelast`, `inverkbelast`) VALUES
(1, 1, 'A 180', '24442', '5.50', '248.29', '495'),
(2, 1, 'A 180 CDI BlueEFFICIENCY', '24800', '5.20', '250.00', '500'),
(3, 2, 'B 200 CDI BlueEFFICIENCY', '30129', '4.40', '287.76', '495'),
(4, 3, 'C 250 CGI BlueEFFICIENCY', '40414', '6.40', '287.76', '2478'),
(5, 3, 'C 300 CDI 4MATIC BlueEFFICIENCY', '48642', '7.00', '715.70', '4957'),
(6, 3, 'C 350 CGI 4MATIC BlueEFFICIENCY', '50941', '7.40', '1381.25', '4957'),
(7, 4, 'CL 500 CDI 4MATIC BlueEFFICIENCY', '129954', '9.90', '2123.22', '4957'),
(8, 4, 'CL 600', '170489', '13.80', '2421.80', '4957');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_price`
--

DROP TABLE IF EXISTS `tbl_price`;
CREATE TABLE `tbl_price` (
  `id` tinyint(4) NOT NULL,
  `min_prijs` int(11) NOT NULL,
  `max_prijs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_price`
--

INSERT INTO `tbl_price` (`id`, `min_prijs`, `max_prijs`) VALUES
(1, 20000, 30000),
(2, 30000, 50000),
(3, 50000, 9999999);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_type`
--

DROP TABLE IF EXISTS `tbl_type`;
CREATE TABLE `tbl_type` (
  `id` tinyint(4) NOT NULL,
  `type` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_type`
--

INSERT INTO `tbl_type` (`id`, `type`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'CL');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_auto`
--
ALTER TABLE `tbl_auto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_price`
--
ALTER TABLE `tbl_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_type`
--
ALTER TABLE `tbl_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_auto`
--
ALTER TABLE `tbl_auto`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `tbl_price`
--
ALTER TABLE `tbl_price`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbl_type`
--
ALTER TABLE `tbl_type`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
