

// Object destructring 

const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 2020
};

const var1 = band.bandName;
const var2 = band.famousSong;

console.log(var1, var2); // output: led zepplin , stairway to heaven

console.log(band);
const {bandName: a, famousSong: b}= band;

console.log(a, b); // output: led zepplin stairway to heaven

// other way 

const {bandName, famousSong} = band;

console.log(bandName, famousSong); // output: led zepplin stairway to heaven

// After picking elements rest of the elements store 

let {bandName : c, famousSong: d, ...restProps} = band;

console.log(c, " ", d,  " ", restProps); // output: led zepplin   stairway to heaven   {year: 2020}
