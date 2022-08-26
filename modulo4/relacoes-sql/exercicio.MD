CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006/01/06",
	"7"
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
	"9"

);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
    "002",
    "Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012/12/27",
	"10"
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
	"8"
  );  
SELECT * FROM Movie;

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"005",
    "Tô Ryca!",
    "Frentista descobre ser a herdeira de uma fortuna.",
    "2016/03/22",
    "9"
);
SELECT * FROM Movie;
-- exercico 6a --

SELECT id, title, rating FROM Movie WHERE id = "004";

-- exercicio 6b --

SELECT * FROM Movie WHERE title = "Tô Ryca!"; 

-- exercicio 6c --

 SELECT id, title, synopsis FROM Movie WHERE rating > 7; 
 
 -- exercicio 7a --
 
SELECT * FROM Movie
WHERE title LIKE "%vida%";		
-- resultado da busca foi null --

-- exercicio 7b --

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
      -- resultado foi null --

-- exercicio 7c --

SELECT * FROM Movie
WHERE release_date < "2020-05-04";
-- retornou cinco filmes --

-- exercicio 7d --

SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
      -- retornou null --
      
      -- exrcicios relacoes sql --
      -- Exercicio 1a --
      -- processo utilizado para referenciar uma tabela com outra que indica que a propriedade em questão é uma chave estrangeira, como diz o nome em inglês. --
      
      -- Exercicio 1b --
      
      CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
   -- tabela rating criada --
   
   INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

-- Exercicio 1c --
 INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"010",
    " Bom!",
    6,
    "004"
);  
-- retornou como se a avaliação tivesse sido feita mesmo sem existir esse id --

-- Exercicio 1d --
  
  ALTER TABLE Movie DROP COLUMN rating;
  
  SELECT * FROM Rating;
  
  -- Exercicio 2a --
  
  CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- A tabela acima mostra que os atores e osfilmes tem as mesmas primary keys --

-- Exercicio 2b --

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);
SELECT * FROM MovieCast;
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "005"
);  

--   Exercicio 3a --
-- não sei explicar --

-- Exercicio 3b --

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
-- retornou 2 rows --

-- Desafio --
-- Exercicio 4a --
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
-- retornou quatro títulos,  quatro ids, duas avaliações e dois comentários. --

-- Exercicio 4b --
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
-- retornou  um filme mas três ids diferentes de atores --

-- Exercicio 4c --
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
-- retornou um average rate, cinco ids e cinco títulos. --

-- Exercicio  5a --
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
-- precisa de dois join para poder juntar dados de duas tabelas doiferentes a de MovieCast e a de actor. --

-- Exercicio 5b e 5c --
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
-- retornou um erro não reconhecendo a coluna m n field list. --

SELECT 
		m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;