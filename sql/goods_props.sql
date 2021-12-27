SET NAMES 'utf8';

--
-- Описание для таблицы goods_props
--
CREATE TABLE goods_props (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  good_id INT(10) UNSIGNED NOT NULL,
  prop VARCHAR(255) NOT NULL,
  value VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 16
AVG_ROW_LENGTH = 1170
CHARACTER SET utf8
COLLATE utf8_general_ci;

-- 
-- Вывод данных для таблицы goods_props
--
INSERT INTO goods_props VALUES
(1, 1, 'Процессор', 'Intel Core i5'),
(2, 1, 'Объем памяти', '4 Гб'),
(3, 1, 'Размер экрана', '13 дюймов'),
(4, 2, 'Процессор', 'Intel Core i7'),
(6, 2, 'Размер экрана', '13 дюймов'),
(7, 3, 'Размер экрана', '14 дюймов'),
(8, 4, 'Процессор', 'Intel Pentium 4'),
(9, 5, 'Процессор', 'Intel Core i7'),
(10, 5, 'Наличие wi-fi', 'да'),
(11, 6, 'Диагональ экрана', '5 дюймов'),
(12, 6, 'GPS', 'да'),
(13, 7, 'Диагональ экрана', '4 дюйма'),
(14, 7, 'GPS', 'нет'),
(15, 8, 'Диагональ экрана', '4 дюйма');
