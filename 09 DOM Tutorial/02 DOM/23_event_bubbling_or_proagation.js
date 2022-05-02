
// ********* event bubling 

/* 
    when we have three or more child inside like chaing 

    <body>
        <div class="grandParent">
            grandparent
            <div class="parent">
                parent
                <div class="child">
                    child
                </div>
            </div>
        </div>
    </body>
    
  1) when we add listener on all of them 
  2) if we click inside child one 
  3) then all upper one click automatically call by its callback fucntion 
  4) this is bubling
*/


const grandparent = document.querySelector('.grandparent');
const paretn = document.querySelector('.paretn');
const child = document.querySelector('.child');

child.addEventListener('click', ()=>{
    console.log('you clicked on child');
});  

parent.addEventListener('click', ()=>{
    console.log('you clicked on Parent');
});

grandparent.addEventListener('click', ()=>{
    console.log('you clicked on grandparent');
});

document.body.addEventListener('click', ()=>{
    console.log('you clicked on body');
});



/* 
    supposed you clicked to child =>

    down to top => child to body 

    output: 
    you clicked no child 
    you clicked on parent
    you clicked on grandParent
    you clicked on body 


*/