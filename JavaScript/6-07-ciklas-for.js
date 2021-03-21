/* Ciklo for panaudojimas

1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a. 0 - 0
b. 0 - 4
c. 0 - 100
d. 574 - 815
e. -50 - 50
f. -70 - 30

2. panaudojant ciklą perašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a. 0 - 11
b. 8 - 31
c. -18 - 18
d. rezultatą pateikti tokiu formatu:
    * Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
    ** Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
    *** Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/
console.log('---------');

const skaicA1 = [0];
let sumA1 = 0;

for (let i = 0; i < skaicA1.length; i++) {
    const A1 = skaicA1[i];
    sumA1 += A1;
}
console.log(sumA1);

console.log('---------');

const skaicB1 = [0, 1, 2, 3, 4];
let sumB1 = 0;

for (let i = 0; i < skaicB1.length; i++) {
    const B1 = skaicB1[i];
    sumB1 += B1;
}
console.log(sumB1);

console.log('---------');

const skaicC1 = [0, 1, 2, 3, 4];
let sumC1 = 0;

for (let i = 0; i < skaicC1.length; i++) {
    const C1 = skaicC1[i];
    sumC1 += C1;
}
console.log(sumC1);
