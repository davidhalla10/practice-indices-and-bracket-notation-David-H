let shelves = [
    ["Dante's Inferno", "Interstellar", "Inception"],
    ["Green Eggs And Ham", "The Prestige", "Dune"],
    ["The Dark Knight Rises", "The Martian", "Project Hail Mary"]
];

console.log(shelves[0][0]);

let row = 2;
let item = 0;
console.log(shelves[row][item]);



for (let i = 0; i < shelves.length - 2; i++) {
    for (let j = 0; j < shelves[i].length; j++) {
        console.log(shelves[1][j]);
    };
};
