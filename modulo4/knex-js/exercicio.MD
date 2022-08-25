## Exercicio 1

**a**
o Código da como resposta exatamente o que o BD devolve
**b**
const searchActor = async (name: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Actor WHERE name = '${name}`
   )

   return result[0] [0]
}
**c**
const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor Where gender = "${gender}"
   `);
   const count = result [0] [0]. count;
   return count;
};

## Exercicio 2

**a**

**b**

**c**

## Exercicio 3

**a**

**b**

## Exercicio 4

**a**

**b**
