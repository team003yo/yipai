-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2023 年 02 月 06 日 13:18
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `my_db2`
--

-- --------------------------------------------------------

--
-- 資料表結構 `products`
--

CREATE TABLE `products` (
  `id` int(3) DEFAULT NULL,
  `img_file` varchar(428) DEFAULT NULL,
  `name` varchar(115) DEFAULT NULL,
  `width` varchar(4) DEFAULT NULL,
  `hegiht` varchar(5) DEFAULT NULL,
  `material` varchar(2) DEFAULT NULL,
  `product_style` varchar(5) DEFAULT NULL,
  `artist` varchar(36) DEFAULT NULL,
  `creation_year` int(4) DEFAULT NULL,
  `work_hue` varchar(40) DEFAULT NULL,
  `price` int(7) DEFAULT NULL,
  `detail_text` varchar(324) DEFAULT NULL,
  `sold` varchar(1) DEFAULT NULL,
  `style` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
