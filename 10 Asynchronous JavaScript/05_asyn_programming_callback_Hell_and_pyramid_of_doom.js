
// callback, callback hell, pyramid of doom
// asynchronous Programming

// After page load 1 s after heading change one by one 
// there is 7 heading ... one after another change

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');

setTimeout(()=>{
    heading1.textContent = "heading 1";
    heading1.style.color = 'violet';
}, 1000);

setTimeout( ()=>{
    heading2.textContent = 'heading 2';
    heading2.style.color = 'orange';
}, 1000);


/* 
    NOTE: This is how we have to write code more and each and every item we have to select
    At a time all the change araive But we want to change one after another :  

*/

// We use the tampleting string and to generate the ID and setTimeout() to get one after another

// MySolution 
for(let i = 1; i <= 7; i++)
{
    let delay = 1000 * i;
    let heading = `heading${i}`;

    let headingClass = document.querySelector(`.${heading}`);
  
    setTimeout( ()=>{
        headingClass.textContent = `Heading ${i}`;
        headingClass.style.color = 'green';
    }, delay)

}

// Teacher Solution

function changeText(element, text, color, time, onsuccessCallback, onFailureCallback)
{
    setTimeout(()=>{
        // if element exist 
        if(element){
            element.changeText = text;
            element.style.color = color;

            // if element succesfully change then 

            if(onsuccessCallback)
            {
                // onsuccessCallback call from here 
                onsuccessCallback();
            }

        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }



    }, time);
}

// callback hell like primamid of doom

// changeText(heading1, 'one', 'green' 1000, ()=>{}, ()=>{});
changeText(heading1, 'one', 'green', 1000, ()=>{
    // if succesfully
    console.log('Hello World');

    changeText(heading2, 'two', 'green', 2000, ()=>{
        // if succesfully
        console.log('Hello World');

        // 7 time we have to do this work ... very nested work
    
    }, ()=>{
        console.log('Heading2 does not exist');
    });



}, ()=>{
    console.log('Heading1 does not exist');
});










// discuss about callback hell

// nested callback 

setTimeout( ()=>{
    
    setTimeout(()=>{
        
        setTimeout( ()=>{
           
            setTimeout( ()=>{
                    console.log('Hi I am callback Hell');
            }, 1000);
        
        }, 1000);
    
    }, 1000);

}, 1000);