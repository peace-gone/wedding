const frameTap = document.getElementById('frameTap');
const frameImg = document.getElementById('frameImg');
const mainFrame = document.getElementById('mainFrame');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

function toggleInvitation() {
  if (!isPlaying) {
    // Start Playing
    isPlaying = true;
    frameImg.src = 'assets/images/frame1-pause.png';
    mainFrame.style.overflowY = 'scroll';
    bgMusic.play().catch(error => {
      console.log("Audio playback failed:", error);
    });

    // Automatically scroll to the next frame
    mainFrame.scrollTo({
      top: mainFrame.clientHeight,
      behavior: 'smooth'
    });
  } else {
    // Pause Playing
    isPlaying = false;
    frameImg.src = 'assets/images/frame1-play.png';
    mainFrame.style.overflowY = 'hidden';
    bgMusic.pause();

    // Optional: scroll back to top so they see the play button clearly
    mainFrame.scrollTop = 0;
  }
}

frameTap.addEventListener('click', toggleInvitation);
frameTap.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleInvitation(); }
});
