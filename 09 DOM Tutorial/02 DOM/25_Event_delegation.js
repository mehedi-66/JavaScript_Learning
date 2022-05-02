
// ********* event Delegation

// first capturing then bubling

// how we capture event by giving properties => true

/* 
    Note:

    Delegation use => object properties => target => when specific element click that store inside the target element

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

  only one Event listener create and .... use the target property to use them 
*/


const grandparent = document.querySelector('.grandparent');
const paretn = document.querySelector('.paretn');
const child = document.querySelector('.child');

// if we create addEventListener() on grandparent all are the things downwards cover:

grandparent.addEventListener('click', (e)=>{
    console.log(e.target);
});

/* 
    supposed you click on child => target give .. clicked element
    
    <div class="child"> ...</div>

    // you clicked on: 
    <div class="parent"> ...</div>

*/