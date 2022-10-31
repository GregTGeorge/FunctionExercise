const b = `=`.repeat(25);

// 1.
function fozzieBear() {
    console.log(`Wocka Wocka!`);
};
fozzieBear();

console.log(b);

// 2.
function beaker(speak){
    console.log(speak.repeat(4));
};
beaker(`Meep`);

console.log(b);

// 3.
function muppetShow(a, b) {
    if (a === `Muppet` && b === `Show`) {
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
};
muppetShow(`Muppet`, `Show`);

console.log(b);

// 4.
function kermit() {
    return `Kermit The Frog`;
}
kermit();

console.log(kermit());

console.log(b);

// 5.
function muppetShowSeasons(seasons) {
    if(seasons === 5) {
        return true;
    } else {
        return false;
    }
}

console.log(muppetShowSeasons(5));

console.log(b);

// 6.
const manOrMuppet = function() {
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

console.log(b);

// 7.
const rainbowConnection = () => {
    return `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`
}
rainbowConnection();
console.log(rainbowConnection());

console.log(b);

// 8. 
console.log(`No`);

console.log(b);

// 9.
console.log(`Yes`);

console.log(b);

// 10a.
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

// 10b.
const upperMovies = newMuppetMovies.map(x => x.toUpperCase());
console.log(upperMovies);

// Bonus
// 11a.
const oldMuppetMovies = [
    `The Muppet Movie`, 
    `The Muppets Take Manhattan`, 
    `The Great Muppet Caper`, 
    `The Muppet Christmas Carol`, 
    `Muppet Treasure Island`,  
    `Muppets From Space`
];

// 11b.
const twoMovies = oldMuppetMovies.filter(m => m.length === 22);
console.log(twoMovies);

console.log(b);

// 12a.
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b.
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 12c.
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
};

// 12d.
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

console.log(b);

// 13.
caps = (string) => {
    let newString = ``;
    for (i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}
console.log(caps(`Hello World`));


caps = (string) => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++) {
        if (string[i] === ` `){
            newString += ` `;
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}

console.log(caps(`Hello World`));