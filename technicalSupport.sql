-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 07 2018 г., 20:35
-- Версия сервера: 10.0.32-MariaDB-0+deb8u1
-- Версия PHP: 7.1.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `programmer_who`
--

-- --------------------------------------------------------

--
-- Структура таблицы `technicalSupport`
--

CREATE TABLE `technicalSupport` (
  `id` int(11) UNSIGNED NOT NULL,
  `userName` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `technicalSupport`
--

INSERT INTO `technicalSupport` (`id`, `userName`, `mail`, `message`, `date`) VALUES
(1, 'SoulEater', 'adleumkoanrd@gmail.com', 'Draw Fuck', '2018-08-02'),
(2, '', '', '', '2018-08-02');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `technicalSupport`
--
ALTER TABLE `technicalSupport`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `technicalSupport`
--
ALTER TABLE `technicalSupport`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
