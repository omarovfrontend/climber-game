const climber = document.querySelector('.climber-img');
const winFlag = document.querySelector('.win-img');

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
  } else {
    winFlag.style.opacity = 0;
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
