import {somar} from './somar.mjs'
import { divisao } from "./divisao.mjs";
import { subtracao } from "./subtração.mjs";
import { potencia } from "./potencia.mjs";
import { multiplicar } from "./multiplicar.mjs";

const numero1 = 6;
const numero2 = 2;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoDiv = divisao(numero1, numero2);
const resultadoSubtracao = subtracao(numero1, numero2);
const resultadoPotencia = potencia(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} ** ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDiv}`);
console.log(`${numero1} ^ ${numero2} = ${resultadoPotencia}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);