````
function calculaNota(ex, p1, p2) {
    const exercicios = ex * 1;
    const nota1 = p1 * 2;
    const nota2 = p2 * 3;
            
    const result = (exercicios + nota1 + nota2) / 6;
    if(result >= 9){
      return "A"
    } else if (result < 9 && result > 7.5) {
      return "B"
    } else if (result < 7.5 && result >= 6){
      return "C"
    } else {
      return "D"
    }
}
```