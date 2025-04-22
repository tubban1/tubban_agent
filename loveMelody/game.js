const gameArea = document.getElementById('game-area');
const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');
const scoreDisplay = document.getElementById('score-display');
const comboDisplay = document.getElementById('combo-display');
const messageDisplay = document.getElementById('message-display');
const harmonyMeterBar = document.getElementById('harmony-meter-bar');
const startButton = document.getElementById('start-button');
// Get touch zones
const touchZone1 = document.getElementById('touch-zone-1');
const touchZone2 = document.getElementById('touch-zone-2');
const musicToggle = document.getElementById('music-toggle');
const soundToggle = document.getElementById('sound-toggle');

// 音频元素
const bgMusic = document.getElementById('bgMusic');
const hitSound = document.getElementById('hitSound');
const perfectSound = document.getElementById('perfectSound');
const missSound = document.getElementById('missSound');
const victorySound = document.getElementById('victorySound');

// 音频状态
let isMusicEnabled = true;
let isSoundEnabled = true;
let audioLoaded = false;

// 设置音频音量
bgMusic.volume = 0.3;
hitSound.volume = 0.5;
perfectSound.volume = 0.6;
missSound.volume = 0.4;
victorySound.volume = 0.7;

// Constants remain mostly the same, but adjust target Y based on element position
let TARGET_Y_POSITION = target1.offsetTop;
const NOTE_SPEED = 180; // Slightly faster maybe for mobile? Adjust as needed.
const NOTE_SPAWN_INTERVAL = 950; // ms

// Hit windows might need slight adjustment based on feel
const PERFECT_WINDOW = 20; // pixels from target center
const GOOD_WINDOW = 40;
const COMBO_BONUS_THRESHOLD = 5;
const COMBO_BONUS_MULTIPLIER = 1.2;

// --- Removed KEY constants ---

let score = 0;
let harmony = 50;
let activeNotes = [];
// --- Removed gameInterval ---
let spawnTimeout;
let gameRunning = false;
let lastFrameTime = 0;
let animationFrameId; // To store the requestAnimationFrame ID
let combo = 0;
let lastHitTime = 0;
let comboTimeout;

// 胜利特效相关
const victoryOverlay = document.getElementById('victory-overlay');
const heartsContainer = document.querySelector('.hearts-container');
const flowersContainer = document.querySelector('.flowers-container');

// --- Game Logic Functions (updateScore, displayMessage, createNote, moveNotes are largely the same) ---

// 音频预加载
function preloadAudio() {
    const audioElements = [bgMusic, hitSound, perfectSound, missSound];
    let loadedCount = 0;
    let hasError = false;
    
    // 设置加载超时
    const loadTimeout = setTimeout(() => {
        if (!audioLoaded && !hasError) {
            console.log('音频加载超时，尝试继续游戏');
            audioLoaded = true;
            startButton.disabled = false;
            displayMessage("音频加载超时，点击开始", 0);
        }
    }, 5000); // 5秒超时
    
    audioElements.forEach(audio => {
        // 添加加载完成事件
        audio.addEventListener('canplaythrough', () => {
            loadedCount++;
            console.log(`音频加载完成: ${audio.id}, 已加载 ${loadedCount}/${audioElements.length}`);
            
            if (loadedCount === audioElements.length) {
                clearTimeout(loadTimeout);
                audioLoaded = true;
                console.log('所有音频加载完成');
                startButton.disabled = false;
                displayMessage("音频加载完成，点击开始", 0);
            }
        });
        
        // 添加错误事件
        audio.addEventListener('error', (e) => {
            console.error('音频加载失败:', audio.id, e);
            hasError = true;
            loadedCount++; // 计入加载失败的文件
            
            if (loadedCount === audioElements.length) {
                clearTimeout(loadTimeout);
                audioLoaded = true;
                startButton.disabled = false;
                displayMessage("部分音频加载失败，游戏可能无法正常播放音效", 3000);
            }
        });
        
        // 尝试加载音频
        try {
            audio.load();
        } catch (e) {
            console.error('音频加载异常:', audio.id, e);
            hasError = true;
            loadedCount++;
        }
    });
}

// 音频控制函数
function toggleMusic() {
    isMusicEnabled = !isMusicEnabled;
    musicToggle.classList.toggle('active', isMusicEnabled);
    
    if (isMusicEnabled) {
        if (gameRunning) {
            playSound(bgMusic);
        }
    } else {
        bgMusic.pause();
    }
    
    // 保存设置到本地存储
    localStorage.setItem('isMusicEnabled', isMusicEnabled);
}

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    soundToggle.classList.toggle('active', isSoundEnabled);
    
    // 保存设置到本地存储
    localStorage.setItem('isSoundEnabled', isSoundEnabled);
}

function playSound(sound) {
    if (!isSoundEnabled) return;
    
    try {
        // 如果音频未加载完成，不播放
        if (!audioLoaded) {
            console.log('音频未加载完成，跳过播放');
            return;
        }
        
        sound.currentTime = 0;
        const playPromise = sound.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("音频播放失败:", error);
                // 如果播放失败，尝试重新加载
                try {
                    sound.load();
                } catch (e) {
                    console.error("重新加载音频失败:", e);
                }
            });
        }
    } catch (e) {
        console.error("音频播放错误:", e);
    }
}

// 初始化音频设置
function initAudioSettings() {
    // 从本地存储加载设置
    const savedMusicEnabled = localStorage.getItem('isMusicEnabled');
    const savedSoundEnabled = localStorage.getItem('isSoundEnabled');
    
    if (savedMusicEnabled !== null) {
        isMusicEnabled = savedMusicEnabled === 'true';
        musicToggle.classList.toggle('active', isMusicEnabled);
    }
    
    if (savedSoundEnabled !== null) {
        isSoundEnabled = savedSoundEnabled === 'true';
        soundToggle.classList.toggle('active', isSoundEnabled);
    }
    
    // 设置初始音量
    bgMusic.volume = 0.3;
    hitSound.volume = 0.5;
    perfectSound.volume = 0.6;
    missSound.volume = 0.4;
}

function updateScore(points, feedbackTarget = null, feedbackType = '') {
    // 计算连击加成
    const comboBonus = combo >= COMBO_BONUS_THRESHOLD ? COMBO_BONUS_MULTIPLIER : 1;
    const finalPoints = Math.floor(points * comboBonus);
    
    score += finalPoints;
    scoreDisplay.textContent = `分数: ${score}`;
    
    // 更新连击显示
    if (points > 0) {
        combo++;
        comboDisplay.textContent = `连击: ${combo}`;
        lastHitTime = Date.now();
        
        // 重置连击计时器
        clearTimeout(comboTimeout);
        comboTimeout = setTimeout(() => {
            if (Date.now() - lastHitTime > 2000) {
                combo = 0;
                comboDisplay.textContent = '连击: 0';
            }
        }, 2000);
    } else {
        combo = 0;
        comboDisplay.textContent = '连击: 0';
    }

    if (points > 0) {
        harmony = Math.min(100, harmony + points / 2);
    } else {
        // Make misses more punishing?
        harmony = Math.max(0, harmony + (points * 1.5)); // e.g., -10 becomes -15
    }
    harmonyMeterBar.style.width = `${harmony}%`;

    if (feedbackTarget && feedbackType) {
        feedbackTarget.classList.add(`hit-${feedbackType}`);
        setTimeout(() => {
            feedbackTarget.classList.remove(`hit-${feedbackType}`);
        }, 150);
    }

    if (harmony <= 0 && gameRunning) { // Check gameRunning to prevent multiple calls
        gameOver(false);
    }
}

function displayMessage(text, duration = 1500) {
    messageDisplay.textContent = text;
    messageDisplay.style.display = 'block';
    messageDisplay.style.zIndex = '10'; // Ensure message is on top
    if (duration > 0) {
        setTimeout(() => {
             // Only hide if the message is still the same one we set
             if (messageDisplay.textContent === text && gameRunning) {
                 messageDisplay.style.display = 'none';
             }
        }, duration);
    }
}

function createNote() {
    if (!gameRunning) return;

    const note = document.createElement('div');
    note.classList.add('note');
    // Recalculate target positions dynamically in case of resize? For simplicity, we calculate once.
    // If layout shifts significantly mid-game, this might need adjustment.
    const target1CenterX = target1.offsetLeft + target1.offsetWidth / 2;
    const target2CenterX = target2.offsetLeft + target2.offsetWidth / 2;
    const noteWidth = note.offsetWidth || parseInt(getComputedStyle(note).width) || 40; // Get actual width

    const targetType = Math.random() < 0.5 ? 1 : 2;
    note.dataset.target = targetType;

    if (targetType === 1) {
        note.classList.add('note1');
        // Use calculated center for better accuracy with responsive sizes
        note.style.left = `${target1CenterX - noteWidth / 2}px`;
    } else {
        note.classList.add('note2');
        note.style.left = `${target2CenterX - noteWidth / 2}px`;
    }

    note.style.top = `-${noteWidth}px`; // Start above based on note size
    gameArea.appendChild(note);
    activeNotes.push(note);

    // 根据连击数调整音符生成速度
    const speedMultiplier = Math.max(0.5, 1 - (combo * 0.05));
    spawnTimeout = setTimeout(createNote, NOTE_SPAWN_INTERVAL * speedMultiplier);
}


function moveNotes(deltaTime) {
    TARGET_Y_POSITION = target1.offsetTop; // Recalculate in loop in case of resize
    const notesToRemove = [];
    activeNotes.forEach(note => {
        // Ensure style.top is parsed correctly, default to initial off-screen
        let currentTop = parseFloat(note.style.top);
        if (isNaN(currentTop)) {
             currentTop = -(note.offsetHeight || 40);
        }

        const newTop = currentTop + NOTE_SPEED * deltaTime;
        note.style.top = `${newTop}px`;

        // Check for miss (adjust buffer slightly)
        if (newTop > TARGET_Y_POSITION + GOOD_WINDOW + (note.offsetHeight || 40)) {
            if (!note.missed) { // Prevent multiple miss triggers for the same note
                 note.missed = true; // Mark as missed
                 displayMessage("错过!", 500);
                 updateScore(-10); // Standard miss penalty
                 const targetHeart = note.dataset.target === '1' ? heart1 : heart2;
                 targetHeart.classList.add('miss');
                 setTimeout(() => targetHeart.classList.remove('miss'), 300);
                 notesToRemove.push(note);
                 note.remove();
                 playSound(missSound);
            }
        }
    });
    activeNotes = activeNotes.filter(note => !notesToRemove.includes(note));
}


function checkHit(targetType) {
    if (!gameRunning) return;

    const targetElement = targetType === 1 ? target1 : target2;
    const targetHeart = targetType === 1 ? heart1 : heart2;
    let hitNote = null;
    let minDistance = Infinity;
    const targetCenterY = TARGET_Y_POSITION + targetElement.offsetHeight / 2;

    activeNotes.forEach(note => {
        if (note.dataset.target == targetType && !note.hit) { // Check if already processing hit
            const noteY = note.offsetTop + note.offsetHeight / 2;
            const distance = Math.abs(noteY - targetCenterY);

            if (distance <= GOOD_WINDOW && distance < minDistance) {
                 minDistance = distance;
                 hitNote = note;
            }
        }
    });

    if (hitNote) {
        hitNote.hit = true; // Mark as being processed for hit
        activeNotes = activeNotes.filter(n => n !== hitNote);
        hitNote.remove();

        if (minDistance <= PERFECT_WINDOW) {
            displayMessage("完美!", 500);
            updateScore(10, targetElement, 'perfect');
            targetHeart.classList.add('hit');
            playSound(perfectSound);
        } else {
            displayMessage("不错!", 500);
            updateScore(5, targetElement, 'good');
             targetHeart.classList.add('hit');
            playSound(hitSound);
        }
         setTimeout(() => targetHeart.classList.remove('hit'), 100);

        // Simplified win condition
        if (score >= 100 && gameRunning) {
            gameOver(true);
        }
    } else {
        // Penalty for tapping empty space? Optional.
        // updateScore(-1); displayMessage("空!", 300);
    }
}

function gameLoop(timestamp) {
    if (!gameRunning) return;

    if (!lastFrameTime) { // Initialize first frame time
        lastFrameTime = timestamp;
    }
    const deltaTime = (timestamp - lastFrameTime) / 1000;
    lastFrameTime = timestamp;

    moveNotes(deltaTime);

    animationFrameId = requestAnimationFrame(gameLoop); // Store the ID
}


function startGame() {
    if (gameRunning || !audioLoaded) return;
    console.log("Starting game...");

    score = 0;
    harmony = 50;
    combo = 0;
    activeNotes.forEach(note => note.remove());
    activeNotes = [];
    updateScore(0);
    comboDisplay.textContent = '连击: 0';
    harmonyMeterBar.style.width = `${harmony}%`;
    TARGET_Y_POSITION = target1.offsetTop; // Set initial target Y

    gameRunning = true;
    startButton.disabled = true;
    startButton.style.opacity = '0.5'; // Visually indicate disabled
    displayMessage("开始!", 500); // Show brief start message

    // 播放背景音乐
    if (isMusicEnabled) {
        playSound(bgMusic);
    }

    lastFrameTime = 0; // Reset lastFrameTime for accurate deltaTime on restart
    animationFrameId = requestAnimationFrame(gameLoop); // Start the loop
    spawnTimeout = setTimeout(createNote, 500);

    // Add touch/click listeners
    // Use 'click' for broader compatibility including desktop testing
    touchZone1.addEventListener('click', handleZone1Tap);
    touchZone2.addEventListener('click', handleZone2Tap);
    // For pure mobile, 'touchstart' might feel slightly more responsive:
    // touchZone1.addEventListener('touchstart', handleZone1Tap);
    // touchZone2.addEventListener('touchstart', handleZone2Tap);

}

function createFloatingElement(container, className, emoji) {
    const element = document.createElement('div');
    element.className = className;
    element.textContent = emoji;
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${3 + Math.random() * 3}s`;
    container.appendChild(element);
    
    // 动画结束后移除元素
    element.addEventListener('animationend', () => {
        element.remove();
    });
}

function startVictoryAnimation() {
    victoryOverlay.classList.remove('hidden');
    victoryOverlay.classList.add('show');
    
    // 停止背景音乐，播放胜利音乐
    if (isMusicEnabled) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        playSound(victorySound);
    }
    
    // 创建漂浮的心形和花朵
    const heartEmojis = ['❤️', '💖', '💗', '💓', '💕'];
    const flowerEmojis = ['🌸', '🌺', '🌹', '🌷', '💐'];
    
    // 每200ms创建一个新的漂浮元素
    const heartInterval = setInterval(() => {
        createFloatingElement(heartsContainer, 'heart', heartEmojis[Math.floor(Math.random() * heartEmojis.length)]);
    }, 200);
    
    const flowerInterval = setInterval(() => {
        createFloatingElement(flowersContainer, 'flower', flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]);
    }, 200);
    
    // 10秒后停止动画和音乐
    setTimeout(() => {
        clearInterval(heartInterval);
        clearInterval(flowerInterval);
        victoryOverlay.classList.remove('show');
        victoryOverlay.classList.add('hidden');
        
        // 停止胜利音乐
        if (isMusicEnabled) {
            victorySound.pause();
            victorySound.currentTime = 0;
        }
    }, 10000);
}

function gameOver(won) {
    if (!gameRunning) return;
    console.log("游戏结束。胜利:", won);
    gameRunning = false;
    clearTimeout(spawnTimeout);
    clearTimeout(comboTimeout);
    cancelAnimationFrame(animationFrameId);
    startButton.disabled = false;
    startButton.style.opacity = '1';

    // 停止背景音乐
    bgMusic.pause();
    bgMusic.currentTime = 0;

    touchZone1.removeEventListener('click', handleZone1Tap);
    touchZone2.removeEventListener('click', handleZone2Tap);

    if (won) {
        displayMessage(`胜利! 最终分数: ${score}`, 0);
        // 显示胜利特效
        setTimeout(startVictoryAnimation, 1000);
    } else {
        displayMessage(`游戏结束... 最终分数: ${score}`, 0);
    }

    setTimeout(() => {
        activeNotes.forEach(note => note.remove());
        activeNotes = [];
    }, 500);
}

// --- New Event Handlers for Touch/Click ---
function handleZone1Tap(event) {
    // event.preventDefault(); // Important if using touchstart to prevent clicks/scroll
    checkHit(1);
}

function handleZone2Tap(event) {
    // event.preventDefault(); // Important if using touchstart
    checkHit(2);
}


// --- Event Listeners ---
startButton.addEventListener('click', startGame);

// Initial message setup
displayMessage("正在加载音频...", 0);

// 添加事件监听器
musicToggle.addEventListener('click', toggleMusic);
soundToggle.addEventListener('click', toggleSound);

// Initialization
initAudioSettings();
preloadAudio();