

//10_Convert_nested_callbacks_to_flat_code_using_promiises.js

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');

function changeText(element, text, color, time)
{
    return new Promise( (resolve, reject) => {
       
        setTimeout( ()=>{

            if(element)
            {
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                reject();
            }

        }, time);

    });
}


// consume the Promise and chaing of then()


// After work one promise return with the setTimeout() insde with it
// store that promise ==>
const returnPromise = changeText(heading1, 'one', 'red', 1000);

returnPromise.then(()=>{
    
    // again that function call  ...... and then() return promise

    return changeText(heading2, 'one', 'red', 1000);
})
    // This way goes parallel e 
// .then()



// *********** now clearly understand 

changeText(heading1, 'one', 'red', 1000)
    .then(()=>{
       return changeText(heading2, 'two', 'green', 1000);
    })
    .then(()=>{
        return changeText(heading3, 'Three', 'blue', 1000)
    })
    .catch((err)=>{
        console.log(err);
    })
