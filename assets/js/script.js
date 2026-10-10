const playBtn = document.getElementById('playBtn');
const frameImg = document.getElementById('frameImg');
let hasPlayed = false;

playBtn.addEventListener('click', () => {
  if (hasPlayed) return;
  hasPlayed = true;

  // swap to the full "pause" artwork
  frameImg.src = 'assets/images/frame1-pause.png';

  // brief pause so the swap actually registers before we leave
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '0';

    setTimeout(() => {
      window.location.href = 'frame2.html';
    }, 400);
  }, 450);
});
