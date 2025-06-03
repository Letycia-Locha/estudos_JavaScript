const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor do lado A: ", function(aStr) {
  rl.question("Digite o valor do lado B: ", function(bStr) {
    rl.question("Digite o valor do lado C: ", function(cStr) {
      const A = parseFloat(aStr);
      const B = parseFloat(bStr);
      const C = parseFloat(cStr);

      if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
          console.log("Triângulo Equilátero");
        } else if (A === B || A === C || B === C) {
          console.log("Triângulo Isósceles");
        } else {
          console.log("Triângulo Escaleno");
        }
      } else {
        console.log("Os lados fornecidos não formam um triângulo válido.");
      }

      rl.close();
    });
  });
});
