
// ********* event Captureing

// first capturing then bubling

// how we capture event by giving properties => true

/* 
    addEventListener('click', ()=>{}, true);

*/

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

    
    -------------------

  capturing => top to down => body to child div 
  bubling => down to top  => child div to body 
*/


const grandparent = document.querySelector('.grandparent');
const paretn = document.querySelector('.paretn');
const child = document.querySelector('.child');

// capture : 

child.addEventListener('click', ()=>{
    console.log('you capture on child');
}, true);  

parent.addEventListener('click', ()=>{
    console.log('you capture on Parent');
}, true);

grandparent.addEventListener('click', ()=>{
    console.log('you capture on grandparent');
}, true);

document.body.addEventListener('click', ()=>{
    console.log('you capture on body');
}, true);


// not capture => bubling 

child.addEventListener('click', ()=>{
    console.log('you bubling on child');
});  

parent.addEventListener('click', ()=>{
    console.log('you bubling on Parent');
});

grandparent.addEventListener('click', ()=>{
    console.log('you bubling on grandparent');
});

document.body.addEventListener('click', ()=>{
    console.log('you bubling on body');
});


/* 
    supposed you click on child element:

    you capture on body
    you capture on grandParent
    you capture on parent
    you capture on child

    you bubling on child
    you bubling on parent
    you bubling on grandparent
    you bubling on body

*/