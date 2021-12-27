SET NAMES 'utf8';

--
-- Описание для таблицы brands
--
DROP TABLE IF EXISTS brands;
CREATE TABLE brands (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  brand VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 7
AVG_ROW_LENGTH = 2730
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Вывод данных для таблицы brands
--
INSERT INTO brands VALUES
(1, 'Aggressor'),
(2, 'BlasterTravel'),
(3, 'DiamondJig'),
(4, 'EliteJig'),
(5, 'EliteJigNT'),
(6, 'EliteMJ'),
(7, 'Anira'),
(8, 'Basara'),
(9, 'BlackSense'),
(10, 'OneSensoric'),
(11, 'ProgressChub'),
(12, 'ProgressJig'),
(13, 'ProgressJig2'),
(14, 'ProgressMJ7'),
(15, 'ProgressMJ2'),
(16, 'ProgressMormix'),
(17, 'ProgressPJ'),
(18, 'ProgressSB'),
(19, 'Vanrex'),
(20, 'VanrexBC'),
(21, 'VanrexJig'),
(22, 'VanrexMJ9'),
(23, 'VanrexTravel'),
(24, 'VanrexTW');
