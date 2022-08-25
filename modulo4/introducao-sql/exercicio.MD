# Introduçãao ao SQL

## Exercicio 1
**a)**
varchar(255)= string  de no máximo 255 caracteres, que não pode estar vazia
varchar(6)= string de no máximo seis caracteres
Date= representa uma data(yyyy-mm-dd) que não pode estar vazia


**b)**
O SHOWDATABASES retornou duas linhas de comandos.
O SHOW TABLES, mostrou a única tabela existente

**c)**
O DESCRIBE Actor retornou as informações pertinentes ao actor da tabela como id, name, salary, bith_date e gender.

## Exercicio 2

**a**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);

**b**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Sandra Bullock",
300000000,
"1964-03-18",
"female"
);
error code 1062
key primary repetida

**c**
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
Error Code 1136
valores diferentes da fileira 1

**d**
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
Error Code 1364
o Campo Nome esta vazio

**e**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
Error Code 1292
Data incorreta

**f**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Brian O'Connor",
60000000000,
"1980-07-15",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"James Bond",
90000000000,
"1962-12-04",
"male"

## Exercicio 3

**a**
SELECT * FROM Actor where gender = "female"
**b**
SELECT salary from Actor WHERE name = "Tony Ramos";
**c**
SELECT * from Actor WHERE gender = "invalid";
retornou vazio, porque todos os atores tem o gender correto
**d**
SELECT id, name, salary from Actor WHERE salary < 500000;
Retornou o Tony Ramos


**e**
SELECT id, name from Actor WHERE id = "002"
Gloria Pires

## Exercicio 4

**a**
Comparar os atores que tenham a letra a ou a letra j no nome  e salario maior que 300.000
**b**
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
Tony Ramos e Gloria Pires
**c**
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
Gloria Pires
**d**
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  Tony Ramos


## Comandos do SQL
USE `freire-marcia-mello`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

SELECT * from Actor; 

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Sandra Bullock",
300000000,
"1964-03-18",
"female"
);
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Brian O'Connor",
60000000000,
"1980-07-15",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"James Bond",
90000000000,
"1962-12-04",
"male"
);

SELECT * from Actor WHERE gender = "female";
SELECT id, nome from Actor WHERE id = "002";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT id, name, salary from Actor WHERE salary < 500000;
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;


