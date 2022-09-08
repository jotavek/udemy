// Uma função que se chama tendo um limite de repetição, como o for ou while por exemplo.

const recursiva = (max) => {
    console.log(max);
    if (max >= 10) return;
    max ++;
    recursiva(max);
}
recursiva(0);