const marvel_heros = ["thor","spiderman","ironman"]

const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)


// console.log(marvel_heros);


const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray(["Hitesh","farhan","ryan"]));

// console.log(Array.from("Hitesh"));

// console.log(Array.from({name: "hitesh"}));


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));