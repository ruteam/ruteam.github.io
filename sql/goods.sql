SET NAMES 'utf8';

--
-- Описание для таблицы goods
--
DROP TABLE IF EXISTS goods;
CREATE TABLE goods (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  good VARCHAR(255) NOT NULL,
  brand_id INT(10) UNSIGNED NOT NULL,
  price INT(11) UNSIGNED NOT NULL,
  photo VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_goods_brands_id FOREIGN KEY (brand_id)
    REFERENCES brands(id) ON DELETE CASCADE ON UPDATE CASCADE,
)
ENGINE = INNODB
AUTO_INCREMENT = 15
AVG_ROW_LENGTH = 1170
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Вывод данных для таблицы goods
--
INSERT INTO goods VALUES
(1, 'Aggressor 45 2.65', 1, 3611, 'agressor-1.jpeg'),
(2, 'Aggressor 35 2.65', 1, 3370, 'agressor-2.jpg'),
(3, 'Aggressor 35 2.40', 1, 3130, 'agressor-3.jpg'),
(4, 'Aggressor 25 2.40', 1, 3130, 'agressor-4.jpg'),
(5, 'Aggressor 25 2.10', 1, 3370, 'agressor-4.jpg'),
(6, 'TRAVEL SPIN 30 2.10', 2, 608, '1.jpeg'),
(7, 'TRAVEL SPIN 30 1.80', 2, 531, '2.jpeg'),
(8, 'MICROJIG 10 2.10', 3, 3030, '1.jpeg'),
(9, 'MICROJIG 10 1.98', 3, 2848, '1.jpeg'),
(10, 'JIG 32 2.70', 3, 3854, '2.jpeg'),
(11, 'JIG 32 2.48', 3, 3565, '2.jpeg'),
(12, 'JIG 32 2.28', 3, 3411, '2.jpeg'),
(13, 'JIG 32 2.10', 3, 3280, '2.jpeg'),
(14, 'JIG 24 2.48', 3, 3435, '2.jpeg'),
(15, 'JIG 24 2.28', 3, 3280, '2.jpeg'),
(16, 'JIG 24 2.10', 3, 3148, '2.jpeg'),
(17, 'JIG 14 2.40', 3, 3305, '2.jpeg'),
(18, 'JIG 14 2.10', 3, 3018, '2.jpeg'),
(19, 'JIG 14 1.98', 3, 2838, '1.jpeg'),
(20, 'ELITE JIG S 27 2.74', 4, 4527, 'elitejig-1.jpeg'),
(21, 'ELITE JIG S 27 2.54', 4, 4400, 'elitejig-1.jpeg'),
(22, 'ELITE JIG S 27 2.34', 4, 4251, 'elitejig-1.jpeg'),
(23, 'ELITE JIG S 17 2.44', 4, 4088, 'elitejig-1.jpeg'),
(24, 'ELITE JIG S 17 2.34', 4, 3893, 'elitejig-1.jpeg'),
(25, 'ELITE JIG S 17 2.16', 4, 3753, 'elitejig-1.jpeg'),
(26, 'ELITE JIG NTWITCH 22 2.13', 5, 3319, 'elitejign-1.jpeg'),
(27, 'ELITE JIG NTWITCH 18 1.98', 5, 3120, 'elitejign-1.jpeg'),
(28, 'ELITE JIG NTWITCH 15 1.83', 5, 2907, 'elitejign-1.jpeg'),
(29, 'ELITE JIG NTWITCH 28 2.23', 5, 3727, 'elitejign-1.jpeg'),
(30, 'ELITE MICROJIG S 7 2.34', 6, 3681, 'elitemj-1.0.jpeg'),
(31, 'ELITE MICROJIG S 7 2.16', 6, 3631, 'elitemj-1.0.jpeg'),
(32, 'ELITE MICROJIG S 7 1.98', 6, 3481, 'elitemj-1.0.jpeg'),
(33, 'ELITE MICROJIG S 10 2.34', 6, 3741, 'elitemj-1.0.jpeg'),
(34, 'ELITE MICROJIG S 10 2.16', 6, 3674, 'elitemj-1.0.jpeg'),
(35, 'ELITE MICROJIG S 10 1.98', 6, 3593, 'elitemj-1.0.jpeg'),
(36, 'Anira 24 2.16', 7, 7275, 'anira-1.jpg'),
(37, 'Anira 14 2.16', 7, 7195, 'anira-2.jpg'),
(38, 'Anira Seatrout 25 2.90', 7, 7428, 'anira-3.jpg'),
(39, 'Anira 14 2.29', 7, 7343, 'anira-4.jpg'),
(40, 'Anira 24 2.29', 7, 7408, 'anira-5.jpg'),
(41, 'Anira 24 2.44', 7, 7492, 'anira-6.jpg'),
(42, 'Anira 34 2.29', 7, 7582, 'anira-7.jpg'),
(43, 'Anira 34 2.49', 7, 7634, 'anira-8.jpg'),
(44, 'Anira 45 2.49', 7, 8106, 'anira-9.jpg'),
(45, 'Anira MicroJig 5 6.6', 7, 6263, 'anira-10.jpg'),
(46, 'Anira MicroJig 5 7.1', 7, 6756, 'anira-11.jpg'),
(47, 'Anira MicroJig 5 7.5', 7, 7082, 'anira-12.jpg'),
(48, 'Anira Stream 10 2.40', 7, 5750, 'anira-13.jpg'),
(49, 'Anira Stream 10 2.70', 7, 6051, 'anira-14.jpg'),
(50, 'Basara 10 2.28', 8, 9237, 'basara-1.jpg'),
(51, 'Basara 10 2.15 ', 8, 8917, 'basara-1.jpg'),
(52, 'Black Sense Spin 110 2.44', 9, 8325, 'blacksensespin-1.jpg'),
(53, 'One S Travel Mate 5 7.10', 10, 16024, 'onesensoric-1.jpg'),
(54, 'One S Small Game 6 7.60', 10, 14927, 'onesensoric-2.jpg'),
(55, 'One S Small Game 5 7.10', 10, 14729, 'onesensoric-3.jpg'),
(56, 'One S Vantage 35 2.29', 10, 14235, 'onesensoric-4.jpg'),
(57, 'One S Vantage 35 2.13', 10, 12946, 'onesensoric-5.jpg'),
(58, 'One S Vantage 28 2.29', 10, 13411, 'onesensoric-6.jpg'),
(59, 'One S Vantage 21 2.29', 10, 12636, 'onesensoric-7.jpg'),
(60, 'One S Vantage 21 2.13', 10, 11914, 'onesensoric-8.jpg'),
(61, 'One S 9 Inspirado 9 2.29', 10, 11185, 'onesensoric-9.jpg'),
(62, 'One S Inspirado 9 2.13', 10, 10640, 'onesensoric-10.jpg'),
(63, 'Progress Chub 10 2.74', 11, 3765, 'progresschub-1.jpg'),
(64, 'Progress Chub 10 2.44', 11, 3597, 'progresschub-2.jpg'),
(65, 'Progress Jig 37 2.74', 12, 4898, 'progressjig-1.jpg'),
(66, 'Progress Jig 37 2.48', 12, 4632, 'progressjig-2.jpg'),
(67, 'Progress Jig 17 2.48', 12, 4257, 'progressjig-3.jpg'),
(68, 'Progress Jig V2 37 2.74', 13, 4854, 'progressjigv-1.jpg'),
(69, 'Progress Jig V2 37 2.49', 13, 4438, 'progressjigv-2.jpg'),
(70, 'Progress Jig V2 37 2.34', 13, 4271, 'progressjigv-3.jpg'),
(71, 'Progress Jig V2 27 2.74', 13, 4603, 'progressjigv-4.jpg'),
(72, 'Progress Jig V2 27 2.49', 13, 4271, 'progressjigv-5.jpg'),
(73, 'Progress Jig V2 27 2.34', 13, 4104, 'progressjigv-6.jpg'),
(74, 'Progress Jig V2 27 2.11', 13, 3884, 'progressjigv-7.jpg'),
(75, 'Progress Jig V2 17 2.49', 13, 4159, 'progressjigv-8.jpg'),
(76, 'Progress Jig V2 17 2.34', 13, 4019, 'progressjigv-9.jpg'),
(77, 'Progress Jig V2 17 2.11', 13, 3799, 'progressjigv-10.jpg'),
(78, 'Progress MicroJig 7 2.32', 14, 3611, 'progressmj-1.jpg'),
(79, 'Progress MicroJig 7 2.12', 14, 3611, 'progressmj-2.jpg'),
(80, 'Progress MicroJig 7 1.98', 14, 3611, 'progressmj-3.jpg');


