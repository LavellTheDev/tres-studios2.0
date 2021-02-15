const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 80;
const diameter = radius * 2;

const circle = document.querySelector(".cursor");
circle.style.width =  `${diameter}px`;
circle.style.height=  `${diameter}px`;


let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.main');


window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px"
}
