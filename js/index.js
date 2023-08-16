// graph
const bars = document.querySelectorAll('.bar');

   function animateBars() {
     bars.forEach((bar) => {
       const newHeight = Math.floor(Math.random() * 100) + 'px';
       bar.style.height = newHeight;
     });
   }
   
   // Initial animation
   animateBars();
   
   // Repeat the animation every 2 seconds
   setInterval(animateBars, 300);

// graph

// 브라우저 창 크기 변화 시 이미지 크기와 배치를 조정하는 함수
function resizeImages() {
  var containerWidth = document.querySelectorAll('.my_img>li').offsetWidth;
  var containerHeight = containerWidth * 0.75; // 원하는 비율로 계산

  var image = document.querySelector('.image-container img');
  image.style.height = containerHeight + 'px';
}

// 초기 로딩 시 이미지 크기 조정 함수 호출
window.addEventListener('load', resizeImages);

// 브라우저 창 크기 변화 시 resizeImages 함수 호출
window.addEventListener('resize', resizeImages);


// 프로필 이미지
const spriteElement = document.querySelector('.sprite');
const animationContainer = document.getElementById('animationContainer');

let animationStarted = false;

animationContainer.addEventListener('mouseenter', () => {
  if (!animationStarted) {
    animationStarted = true;
    animateSprite();
  }
});

function animateSprite() {
  let frame = 0;
  const frameWidth = 1302;
  const totalFrames = 18;
  const animationSpeed = 30;
  const stopPosition = 20832; // Stop at this position in pixels

  function nextFrame() {
    spriteElement.style.backgroundPosition = `-${frame * frameWidth}px 0px`;

    if (frame * frameWidth < stopPosition && frame < totalFrames - 1) {
      frame++;
      setTimeout(nextFrame, animationSpeed);
    }
  }

  nextFrame();
}

//round rolling banner
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');
  const rotationInterval = 3000;
  const rotationAmount = -15;

  let currentRotation = 0;

  function rotateCards() {
    currentRotation = (currentRotation + rotationAmount) % 195;
    cards.forEach((card, index) => {
      card.style.transition = 'transform 1s ease, scale 0.5s ease';
      card.style.transform = `rotate(${currentRotation + (index * 15)}deg)`; // 회전 각도 수정
      
      if (currentRotation + (index * 15) <= 0) {
        card.classList.add('active'); // 특정 위치에 도달하면 active 클래스 추가
      } else {
        card.classList.remove('active'); // 특정 위치에서 벗어나면 active 클래스 제거
      }
    });

    setTimeout(() => {
      rotateCards();
    }, rotationInterval);
  }

  rotateCards();
});