export function isFunction(value: any) {
    return typeof value === "function";
}

export function randomNum(m: number, n: number) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}

export function randomColor() {
    return `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(
        0,
        255
    )})`;
}

export const originalCharacter = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
