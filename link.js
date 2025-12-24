const igButton = document.getElementById("instagram");
const ytButton = document.getElementById("youtube");
const lbButton = document.getElementById("letterboxd");
const emailButton = document.getElementById("contact");
const picsBtn = document.getElementById("pics");
const musicBtn = document.getElementById("music");
let count = 0;
const targetCount = Math.floor(Math.random() * 999999) + 100000;
const counterEl = document.getElementById('visitor-count');
const bioSection = document.getElementById("bio");
//const pfButton = document.getElementById("portfolio");
//i will add my portfolio in a minute i have to make a website
//i want to make a cute under construction page 
const gifs = ["assets/starrr.gif", "assets/woth.gif", "assets/eye roll.gif",
    "assets/mikuuu.gif", "assets/finn.gif"
]

const bioPhrases = [ "hi", "why are you here?", "early sunsets over monroeville",
  "watching you", "is this fun?", "loona", "(˶˃ ᵕ ˂˶)", "playing god", "five nights at zombi3girrl's",
"STOPPPP", "shoutout to hatsune miku", "eevee was here"]

igButton.addEventListener("click", function() {
    playClickSound();
    window.location.href = "https://www.instagram.com/stars1lk/";
});

ytButton.addEventListener("click", function() {
    playClickSound();
    window.location.href = "https://youtube.com/@zombi3girrl?si=m_1JVxBNUgowCqb-";
});

lbButton.addEventListener("click", function() {
    playClickSound();
    window.location.href = "https://letterboxd.com/crazyymaniac/";
});

emailButton.addEventListener("click", function() {
    playClickSound();
  window.location.href = "mailto:elaaa066@gmail.com?subject=Hello%20from%20your%20website!!!";
});


  picsBtn.addEventListener("click", () => {
    playClickSound();
    showRetroAlert("🚧 MY PICS PAGE IS UNDER CONSTRUCTION 🚧");
  });



  musicBtn.addEventListener("click", () => {
    playClickSound();
    showRetroAlert("🚧 MY MUSIC PAGE IS UNDER CONSTRUCTION 🚧");
  });

  const gifImg = document.getElementById("random-gif");

if (gifImg) {
  const randomIndex = Math.floor(Math.random() * gifs.length);
  gifImg.src = gifs[randomIndex];
}

if (bioSection){
  const randomBio = bioPhrases[Math.floor(Math.random() * bioPhrases.length)];
  bioSection.textContent = randomBio;
}
 

    // Sparkle cursor trail
    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.8) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
      }
    });

    // 1. RETRO CUSTOM ALERT
    function showRetroAlert(message) {
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      
      const dialog = document.createElement('div');
      dialog.style.cssText = `
        background: #c0c0c0;
        border: 2px solid #000;
        box-shadow: inset -1px -1px 0 #808080, inset 1px 1px 0 #fff;
        width: 400px;
        max-width: 90%;
        font-family: 'VT323', monospace;
      `;
      
      dialog.innerHTML = `
        <div style="background: linear-gradient(90deg, #000080, #1084d0); color: white; padding: 4px 8px; font-weight: bold; font-size: 16px;">
          🖥️ Message
        </div>
        <div style="padding: 30px 20px; text-align: center; font-size: 18px; color: #000; white-space: pre-line;">
          ${message}
        </div>
        <div style="padding: 10px; text-align: center;">
          <button id="retro-ok-btn" style="
            background: #c0c0c0;
            border-top: 2px solid #fff;
            border-left: 2px solid #fff;
            border-right: 2px solid #404040;
            border-bottom: 2px solid #404040;
            padding: 8px 30px;
            font-family: 'VT323', monospace;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          ">OK</button>
        </div>
      `;
      
      overlay.appendChild(dialog);
      document.body.appendChild(overlay);
      
      document.getElementById('retro-ok-btn').addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
      
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
        }
      });
    }

    // 2. FAKE CLICK SOUND
    function playClickSound() {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    }