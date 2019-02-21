
var x = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", "écri un chifr");

for (var i = 1; i <= x; i++) {
    var fact = '';
    
    for (var j = 1; j <= (x - i); j++) {
      fact += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      fact += '#';
    }
    
    console.log(fact);
  }

