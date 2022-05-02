
// event object 

/* 
    button id one
    button id two
    button id there
*/

const firstButton = document.querySelector('.btn-headline');

firstButton.addEventListener('click', function(){
    console.log(this); // output of this: button itself
});

/*
    note:
    when we add eventListener on an eleemnt 

    JS engine ==== line by line execute the code 
    browser ==== JS engine + extra featuers
    broser ==== JS engine + WebAPI

    when user click one any eventListener that time => 

    Broswer === 2 woke done for that event

    1) callback function give to JS engin 
    2) callback function with extra data infomation also given 

    Broswer give that inforamtion => give as object and we can take that object as parameter of => function(e){}

*/


firstButton.addEventListener('click', function(e){
    console.log(e); // output: 
});

/* 
    output:
    isTrusted: true
    altKey: false
    altitudeAngle: 1.5707963267948966
    azimuthAngle: 0
    bubbles: true
    button: 0
    buttons: 0
    cancelBubble: false
    cancelable: true
    clientX: 377
    clientY: 82
    composed: true
    ctrlKey: false
    currentTarget: null
    defaultPrevented: false
    detail: 1
    eventPhase: 0
    fromElement: null
    height: 1
    isPrimary: false
    layerX: -55
    layerY: 7
    metaKey: false
    movementX: 0
    movementY: 0
    offsetX: 42
    offsetY: 13
    pageX: 377
    pageY: 82
    path: (7) [button.btn.btn-headline, div.headline, header.header, body, html, document, Window]
    pointerId: 1
    pointerType: "mouse"
    pressure: 0
    relatedTarget: null
    returnValue: true
    screenX: 854
    screenY: 162
    shiftKey: false
    sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
    srcElement: button.btn.btn-headline
    tangentialPressure: 0
    target: button.btn.btn-headline
    tiltX: 0
    tiltY: 0
    timeStamp: 4315.5
    toElement: null
    twist: 0
    type: "click"
    view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    which: 1
    width: 1
    x: 377
    y: 82
    [[Prototype]]: PointerEvent
    ﻿

*/


firstButton.addEventListener('click', (e)=>{
    console.log(e.currentTarget); // output: button itself print 
});


// this is how it work