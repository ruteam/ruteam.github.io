SET NAMES 'utf8';

--
-- Описание для таблицы details
--
DROP TABLE IF EXISTS details;
CREATE TABLE details (
  order_id INT(11) NOT NULL,
  good_id INT(11) NOT NULL,
  good VARCHAR(255) NOT NULL,
  price INT(11) NOT NULL,
  count INT(11) NOT NULL,
  PRIMARY KEY (order_id, good_id)
)
ENGINE = INNODB
AVG_ROW_LENGTH = 3276
CHARACTER SET utf8
COLLATE utf8_general_ci;
