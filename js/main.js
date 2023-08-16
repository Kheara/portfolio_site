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

// round rolling banner
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

