SET NAMES 'utf8';

--
-- Описание для таблицы categories
--
DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  category VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 4
AVG_ROW_LENGTH = 5461
CHARACTER SET utf8
COLLATE utf8_general_ci;

-- 
-- Вывод данных для таблицы categories
--
INSERT INTO categories VALUES
(1, 'Ноутбуки'),
(2, 'Смартфоны'),
(3, 'Видеокарты');
