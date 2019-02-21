var x = prompt("De quel nombre veut tu calculer la factorielle ?", "écri un chifr");

var fact=1;
for (var i=1; i<=x; i++)
    {
        fact=fact*i;
    }

console.log("Le résultat est :" + fact + "!");







/* autres solutions :

function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
**********************************************

function factorielle(n) {
  return n == 0 ? 1 :  n * factorielle (n-1);
}

*/