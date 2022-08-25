## Exercicio 1
Leia os comandos abaixo e indique o que eles fazem.

**a**
ALTER TABLE Actor DROP COLUMN salary;
 
 esse comando altera a tabela retirando a coluna de salario.

 **b**
 ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
 
 esse comando altera o sexo do genero.

 **c**
 ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

esse comando altera o genero do ator

## Exercicio 2

**a**
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

**b**
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

**c**
SELECT * FROM Actor;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Sandra Bullock",
  400000,
  "1968-08-25", 
  "female"
);

**d**
UPDATE Actor
SET favorite_ice_cream_flavor = "vanila"
WHERE favorite_ice_cream_flavor = "chocolate";

UPDATE Actor
SET id = "014"
WHERE id = "020";

Nos dois casos, tanto no icecream flavor como no id, retornou como se tivesse mudado mas sem uma linha específica.

## Exercicio 3
 vamos ver o D: DELETE

 **a**
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

 **b**
 DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
 tres linhas foram deletadas.

 ## Exercicio 4
 **a**
SELECT MAX(salary) FROM Actor

o maior salario é 71000000

 **b**
SELECT MIN(salary) FROM Actor WHERE gender = "female"

o menor salario das mulheres é 400.000

 **c**
SELECT COUNT(*) FROM Actor WHERE gender = "female";

3

 **d**
SELECT SUM(salary) FROM Actor

73100000

## Exercicio 5

**a**
Essa query separou as pessoas da minha planilha por genero.

**b**
SELECT id, name FROM Actor

retornou 5 linhas em ordem alfabética decrescente.

**c**
SELECT * FROM Actor
ORDER BY salary;

retornou em ordem crescente dos salários de cada ator.

**d**
SELECT * FROM Actor
ORDER BY salary;

retornou os tres maiores salarios em ordem decrescente.

**e**
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

retornou a média salarial dos homens e das mulheres

## Exercicio 6

**a**
**b**
**c**
**d**







 
