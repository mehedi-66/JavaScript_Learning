 

console.log('Script start: ');


 const allButtons = document.querySelector('.btn-headline');

 allButtons.addEventListener('click', (e)=>{
            // after click delay 
            let num = 0;
            for(let i = 0; i <= 1000000000; i++){
                num += i;
            }

        console.log(e.currentTarget.textContent, num);
     });


     let outerVar = 0;

     for(let i = 0; i <= 100000000; i++){
         outerVar += i;
     }

console.log('outer value: ', outerVar); 
 console.log('script end !!!');

 /* 
     JS engine         WebAPI

     stack


     -----------
     eventLoop <==  queue

     JS engin havey taks give to WebAPI after compiliting  => webAPI send to queue  

     eventLoop => check the stak is empty or not => if the stak is empty then ... queue element => push to stack ans serve 
 
 */
