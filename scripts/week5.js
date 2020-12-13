// initialize variables
let name = document.querySelector('#myText').value;
let myImage = document.querySelector('#changeMe');
let myFigure = document.querySelector('figure');
const displaymsg = document.querySelector('#display');

const viewer = document.querySelector('#view');
viewer.onclick = function(){
    myPassFunction();
}

function myPassFunction() {
    name = document.querySelector('#myText').value;

    if (name === '449') {
        displaymsg.textContent = 'Congrats! This was a java script exercise, you just retrieved a value from a text field, used a conditional statement to check equality, and displayed a message in a new text field! You also switched the source attribute of an image to another source when you clicked the hint!';
    } else {
        displaymsg.textContent = 'Wrong Password, Please try again!';
    }
}


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/week5/img-02.svg') {
      myImage.setAttribute('src','../images/week5/img-01.svg');
    } else {
      myImage.setAttribute('src','../images/week5/img-02.svg');
    }
}
