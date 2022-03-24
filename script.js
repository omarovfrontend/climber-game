const climber = document.querySelector('.climber-img');
const winFlag = document.querySelector('.win-img');

const span0 = document.querySelectorAll('span')[0];
const span1 = document.querySelectorAll('span')[1];
const span2 = document.querySelectorAll('span')[2];
const span3 = document.querySelectorAll('span')[3];
const span4 = document.querySelectorAll('span')[4];
const span5 = document.querySelectorAll('span')[5];
const span6 = document.querySelectorAll('span')[6];
const span7 = document.querySelectorAll('span')[7];
const span8 = document.querySelectorAll('span')[8];
const span9 = document.querySelectorAll('span')[9];

const routes = [
  {
    bottom: '20px',
    left: '130px'
  },
  {
    bottom: '175px',
    left: '285px'
  },
  {
    bottom: '240px',
    left: '555px'
  },
  {
    bottom: '130px',
    left: '690px'
  },
  {
    bottom: '30px',
    left: '825px'
  },
  {
    bottom: '160px',
    left: '850px'
  },
  {
    bottom: '300px',
    left: '925px'
  }
];

const showWinFlag = () => {
  if(count === maxCount) {
    winFlag.style.opacity = 1;

    span0.style.display = 'block';
    span1.style.display = 'block';
    span2.style.display = 'block';
    span3.style.display = 'block';
    span4.style.display = 'block';
    span5.style.display = 'block';
    span6.style.display = 'block';
    span7.style.display = 'block';
    span8.style.display = 'block';
    span9.style.display = 'block';
  } else {
    winFlag.style.opacity = 0;

    span0.style.display = 'none';
    span1.style.display = 'none';
    span2.style.display = 'none';
    span3.style.display = 'none';
    span4.style.display = 'none';
    span5.style.display = 'none';
    span6.style.display = 'none';
    span7.style.display = 'none';
    span8.style.display = 'none';
    span9.style.display = 'none';
  }
}

let count = 0;
let maxCount = routes.length - 1;

document.addEventListener('keydown', function(e) {
  if(e.code === 'KeyX' && count < maxCount) {
    count++;
    climber.style.bottom = routes[count].bottom;
    climber.style.left = routes[count].left;
    showWinFlag();
  } else if(e.code === 'KeyZ' && count > 0) {
    count--;
    climber.style.bottom = routes[count].bottom;
    climber.style.left = routes[count].left;
    showWinFlag();
  }
})
