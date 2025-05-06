const names = ["黄老师", "小绿", "婷婷", "Lotte"];
const greetings = ["愿你做一个甜甜的梦", "祝你今晚好眠", "星星替我对你说晚安", "梦里有光，心中有爱"];
const dreams = ["森林小屋", "星河旅站", "童话城堡", "无人海滩"];
const sounds = [ 
  { label: "漫步", file: "light-foot-steps-in-a-forest-332831.mp3" },
  { label: "海浪", file: "ocean-beach-waves-332383.mp3" },
  { label: "屋顶雨", file: "rain-echo-roof-resonance-in-the-woods-335718.mp3" },
  { label: "森林", file: "spring-forest-nature-332842.mp3" },
  { label: "水流", file: "water-over-a-brook-with-bird-song48k-332835.mp3" },
  { label: "随机", file: null }
];
const emotions = ["我很想你", "今天还不错，谢谢你", "希望你也睡得好", "梦里见！"];

document.addEventListener('DOMContentLoaded', function() {
  const nameEl = document.getElementById("name");
  const greetingEl = document.getElementById("greeting");
  const dreamGate = document.getElementById("dreamGate");
  const dreamOptions = document.getElementById("dreamOptions");
  const soundGate = document.getElementById("soundGate");
  const soundOptions = document.getElementById("soundOptions");
  const bgSound = document.getElementById("bgSound");
  const emotionBox = document.getElementById("emotionBox");
  const emotionOptions = document.getElementById("emotionOptions");
  const messageBox = document.getElementById("messageBox");
  const customMessage = document.getElementById("customMessage");
  const sendCustom = document.getElementById("sendCustom");
  const effectContainer = document.getElementById("effectContainer");

  nameEl.textContent = names[Math.floor(Math.random() * names.length)];
  greetingEl.textContent = greetings[Math.floor(Math.random() * greetings.length)];
  
  // 播放随机声音的函数
  function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * (sounds.length - 1)); // 排除"随机"选项
    const soundFile = sounds[randomIndex].file;
    bgSound.src = soundFile;
    bgSound.play();
  }

  // 清除所有特效
  function clearEffects() {
    effectContainer.innerHTML = '';
    document.body.className = '';
  }

  // 森林小屋特效 - 萤火虫效果
  function forestEffect() {
    clearEffects();
    document.body.classList.add('forest-theme');
    
    for (let i = 0; i < 50; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      firefly.style.left = Math.random() * 100 + 'vw';
      firefly.style.top = Math.random() * 100 + 'vh';
      firefly.style.animationDuration = 5 + Math.random() * 10 + 's';
      firefly.style.animationDelay = Math.random() * 5 + 's';
      effectContainer.appendChild(firefly);
    }
  }

  // 星河旅站特效 - 星空效果
  function starsEffect() {
    clearEffects();
    document.body.classList.add('stars-theme');
    
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.width = star.style.height = Math.random() * 3 + 'px';
      star.style.animationDuration = 1 + Math.random() * 5 + 's';
      effectContainer.appendChild(star);
    }
  }

  // 童话城堡特效 - 彩色渐变效果
  function fairytaleEffect() {
    clearEffects();
    document.body.classList.add('fairytale-theme');
    
    // 添加彩虹背景
    const rainbow = document.createElement('div');
    rainbow.className = 'rainbow';
    effectContainer.appendChild(rainbow);
    
    // 添加城堡轮廓
    const castle = document.createElement('div');
    castle.className = 'castle';
    effectContainer.appendChild(castle);
    
    // 添加闪光粒子
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.top = Math.random() * 100 + 'vh';
      sparkle.style.animationDuration = 2 + Math.random() * 4 + 's';
      sparkle.style.animationDelay = Math.random() * 3 + 's';
      effectContainer.appendChild(sparkle);
    }
  }

  // 无人海滩特效 - 波浪效果
  function beachEffect() {
    clearEffects();
    document.body.classList.add('beach-theme');
    
    // 添加太阳
    const sun = document.createElement('div');
    sun.className = 'sun';
    effectContainer.appendChild(sun);
    
    // 添加波浪 - 确保波浪元素正确创建
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = 'wave';
      // 不再设置内联样式，使用CSS类选择器控制
      effectContainer.appendChild(wave);
    }
    
    // 添加海鸥
    for (let i = 0; i < 5; i++) {
      const seagull = document.createElement('div');
      seagull.className = 'seagull';
      seagull.style.top = 20 + Math.random() * 30 + 'vh';
      seagull.style.left = Math.random() * 100 + 'vw';
      seagull.style.animationDuration = 15 + Math.random() * 10 + 's';
      seagull.style.animationDelay = Math.random() * 5 + 's';
      effectContainer.appendChild(seagull);
    }
  }

  // 创建梦境按钮并添加特效
  dreams.forEach((dream, index) => {
    const btn = document.createElement("button");
    btn.textContent = dream;
    btn.onclick = () => {
      soundGate.style.display = "block"; // 显示声音选择部分
      emotionBox.style.display = "block"; // 显示留言部分
      playRandomSound(); // 自动播放随机声音
      
      // 应用对应的特效
      switch(index) {
        case 0: // 森林小屋
          forestEffect();
          break;
        case 1: // 星河旅站
          starsEffect();
          break;
        case 2: // 童话城堡
          fairytaleEffect();
          break;
        case 3: // 无人海滩
          beachEffect();
          break;
      }
    };
    dreamOptions.appendChild(btn);
  });

  sounds.forEach(s => {
    const btn = document.createElement("button");
    btn.textContent = s.label;
    btn.onclick = () => {
      let soundFile = s.file;
      if (!soundFile) {
        const random = sounds[Math.floor(Math.random() * (sounds.length - 1))];
        soundFile = random.file;
      }
      bgSound.src = soundFile;
      bgSound.play();
    };
    soundOptions.appendChild(btn);
  });

  emotions.forEach(em => {
    const btn = document.createElement("button");
    btn.textContent = em;
    btn.onclick = () => {
      messageBox.textContent = `✅ 留言已发送：「${em}」`;
      fetch("https://formspree.io/f/xvgaaldl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ message: em })
      });
    };
    emotionOptions.appendChild(btn);
  });

  sendCustom.onclick = () => {
    const text = customMessage.value.trim();
    if (text) {
      messageBox.textContent = `✅ 留言已发送：「${text}」`;
      fetch("https://formspree.io/f/xvgaaldl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ message: text })
      });
      customMessage.value = "";
    }
  };
});