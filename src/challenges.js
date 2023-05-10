/* eslint-disable complexity */
// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => {
  if (parametro1 && parametro2 === true) {
    return true;
  }

  return false;
};
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  const primeiroNome = array[0];
  const ultimoNome = array[array.length - 1];
  const nomeCompleto = [ultimoNome, primeiroNome].join(', ');
  return nomeCompleto;
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let maior = array[0];
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      contador += 1;
    }
  }
  return contador;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, altura) => (base * altura) / 2;
const calcRectangleArea = (base, altura) => base * altura;

const calcAllAreas = (base, altura, forma) => {
  let valorDaArea = 0;
  if (forma === 'retângulo') {
    valorDaArea = calcRectangleArea(base, altura);
    return `O valor da área do retângulo é de: ${valorDaArea}`;
  }
  if (forma === 'triângulo') {
    valorDaArea = calcTriangleArea(base, altura);
    return `O valor da área do triângulo é de: ${valorDaArea}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(mouse - cat1);
  const distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(entrada) {
  for (let index = 0; index < entrada.length; index += 1) {
    if (entrada[index] % 3 === 0 && entrada[index] % 5 === 0) {
      entrada[index] = 'fizzBuzz';
    } else if (entrada[index] % 5 === 0) {
      entrada[index] = 'buzz';
    } else if (entrada[index] % 3 === 0) {
      entrada[index] = 'fizz';
    } else {
      entrada[index] = 'bug!';
    }
  }
  return entrada;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(texto) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i <= code.length; i += 1) {
    texto = texto.replace(RegExp(code[i - 1], 'g'), i);
  }
  return texto;
}

function decode(texto) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i <= code.length; i += 1) {
    texto = texto.replace(RegExp(i.toString(), 'g'), code[i - 1]);
  }
  return texto;
}

// Desafio 10 - Crie a função techList


// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
