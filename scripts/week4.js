const myBody = document.querySelector ('main');
const myHeading = document.querySelector('#headDisplay');
const myFigure = document.querySelector ('figure');

myBody.onclick = function() {
   myHeading.textContent = 'Happy Halloween!';
   myHeading.style.fontSize = '5vw';
   myHeading.style.color = 'rgb(160, 0, 0)';
   myHeading.style.fontFamily = 'Permanent Marker', cursive;
}

myFigure.onclick = function() {
    myFigure.style.opacity = '100%';

}

