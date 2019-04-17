const A = 1 << 0;
const B = 1 << 1;
const C = 1 << 2;

function input(value) {
    return {
        A: Boolean(value & A),
        B: Boolean(value & B),
        C: Boolean(value & C)
    }
}

module.exports = (value, expectedA, expectedB, expectedC) => {
    var ret = input(value)
    return ret.A == expectedA && ret.B == expectedB && ret.C == expectedC
}