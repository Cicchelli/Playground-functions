// Desafio 11 - Crie a função generatePhoneNumber

// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC) {
  
  let checaA = lineA < lineB + lineC && > Math.abs(lineB - lineC);

  let checaB = lineB < lineA + lineC && > Math.abs(lineA - lineC);

  let checaC = lineC < lineB + lineA && > Math.abs(lineB - lineA);

  return checaA && checaB && checaC;
}


// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
