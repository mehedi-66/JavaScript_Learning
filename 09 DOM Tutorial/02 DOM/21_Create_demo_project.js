
const button = document.querySelector('.btn-headline');

 const body = document.body;

 /* 
    Math.random(); 
    this random math function give random value  [0 - 1)

    if * 10 then give [0 - 10)

    Math.random() * 10;

    we need integer value: 
    
    Math.floor(Math.random());


    we need random number from [0 - 255]

    then Math.floor(Math.random() * 256)

 */
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}


 button.addEventListener('click', () =>{
     const randomColor = randomColorGenerator();

     body.style.backgroundColor = randomColor;

});