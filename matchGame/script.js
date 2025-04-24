const words = [
  // 食物类
  { emoji: "🍪", word: "cookie" },
  { emoji: "🍮", word: "pudding" },
  { emoji: "🍬", word: "candy" },
  { emoji: "🥤", word: "cola" },
  { emoji: "🥛", word: "milk" },
  { emoji: "🧃", word: "juice" },
  { emoji: "🍎", word: "apple" },
  { emoji: "🍕", word: "pizza" },
  { emoji: "🍦", word: "ice cream" },
  { emoji: "🌮", word: "taco" },
  { emoji: "🍔", word: "burger" },
  { emoji: "🍟", word: "fries" },
  { emoji: "🥨", word: "pretzel" },
  { emoji: "🥐", word: "croissant" },
  
  // 动物类
  { emoji: "🐱", word: "cat" },
  { emoji: "🐶", word: "dog" },
  { emoji: "🐼", word: "panda" },
  { emoji: "🦁", word: "lion" },
  { emoji: "🐘", word: "elephant" },
  { emoji: "🦒", word: "giraffe" },
  
  // 水果类
  { emoji: "🍌", word: "banana" },
  { emoji: "🍇", word: "grapes" },
  { emoji: "🍊", word: "orange" },
  { emoji: "🍓", word: "strawberry" },
  { emoji: "🥝", word: "kiwi" },
  { emoji: "🍍", word: "pineapple" },
  
  // 交通工具
  { emoji: "🚗", word: "car" },
  { emoji: "✈️", word: "plane" },
  { emoji: "🚲", word: "bike" },
  { emoji: "🚂", word: "train" },
  
  // 天气相关
  { emoji: "☀️", word: "sun" },
  { emoji: "🌧️", word: "rain" },
  { emoji: "⛄", word: "snow" },
  { emoji: "🌈", word: "rainbow" },
  
  // 运动相关
  { emoji: "⚽", word: "soccer" },
  { emoji: "🏀", word: "basketball" },
  { emoji: "🎾", word: "tennis" },
  { emoji: "⚾", word: "baseball" }
];

class MemoryGame {
  constructor() {
    this.board = document.getElementById("game-board");
    this.matchSound = document.getElementById("match-sound");
    this.flipSound = document.getElementById("flip-sound");
    this.movesCount = document.getElementById("moves-count");
    this.timeElement = document.getElementById("time");
    this.modal = document.getElementById("game-over-modal");
    
    this.firstTile = null;
    this.secondTile = null;
    this.moves = 0;
    this.timeStart = null;
    this.timerInterval = null;
    
    this.initializeGame();
    this.setupEventListeners();
    
    // 添加音频错误处理
    this.matchSound.addEventListener('error', () => {
      console.warn('音效加载失败，使用备用音效');
      this.matchSound.src = 'https://assets.mixkit.co/active_storage/sfx/2000/2000.wav';
    });
    
    this.flipSound.addEventListener('error', () => {
      console.warn('音效加载失败，使用备用音效');
      this.flipSound.src = 'https://assets.mixkit.co/active_storage/sfx/2003/2003.wav';
    });
    
    // 预加载音效
    this.matchSound.load();
    this.flipSound.load();
  }

  initializeGame() {
    this.board.innerHTML = '';
    this.moves = 0;
    this.movesCount.textContent = '0';
    this.createTiles();
    this.startTimer();
  }

  setupEventListeners() {
    document.getElementById("restart").addEventListener("click", () => this.resetGame());
    document.getElementById("play-again").addEventListener("click", () => {
      this.modal.style.display = "none";
      this.resetGame();
    });
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  createTiles() {
    let tiles = [];
    // 增加随机选择的数量到12对（之前是6对）
    const selectedWords = this.shuffle([...words]).slice(0, 12);
    
    selectedWords.forEach(item => {
      const showEmojiFirst = Math.random() < 0.5;
      if (showEmojiFirst) {
        tiles.push({ type: "emoji", value: item.emoji, pair: item.word });
        tiles.push({ type: "word", value: item.word, pair: item.emoji });
      } else {
        tiles.push({ type: "word", value: item.word, pair: item.emoji });
        tiles.push({ type: "emoji", value: item.emoji, pair: item.word });
      }
    });

    // 复制一次以填满24个格子（12对）
    tiles = [...tiles, ...tiles];
    tiles = this.shuffle(tiles);

    // 创建卡片
    tiles.forEach(tileData => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.value = tileData.value;
      tile.dataset.pair = tileData.pair;
      tile.dataset.type = tileData.type;
      
      if (tileData.type === "word") {
        tile.classList.add("word-tile");
      } else {
        tile.classList.add("emoji-tile");
      }
      
      tile.textContent = tileData.value;
      tile.addEventListener("click", () => this.handleClick(tile));
      this.board.appendChild(tile);
    });
  }

  handleClick(tile) {
    if (tile.classList.contains('matched') || tile === this.firstTile) return;

    // 添加音效播放错误处理
    try {
      this.flipSound.currentTime = 0; // 重置音频播放位置
      this.flipSound.play().catch(error => console.warn('音效播放失败:', error));
    } catch (error) {
      console.warn('音效播放失败:', error);
    }

    tile.classList.add('selected');

    if (!this.firstTile) {
      this.firstTile = tile;
    } else {
      this.secondTile = tile;
      this.moves++;
      this.movesCount.textContent = this.moves;
      this.checkMatch();
    }
  }

  checkMatch() {
    const isMatch = 
      this.firstTile.dataset.value === this.secondTile.dataset.pair &&
      this.firstTile.dataset.pair === this.secondTile.dataset.value;

    if (isMatch) {
      setTimeout(() => {
        // 添加音效播放错误处理
        try {
          this.matchSound.currentTime = 0; // 重置音频播放位置
          this.matchSound.play().catch(error => console.warn('音效播放失败:', error));
        } catch (error) {
          console.warn('音效播放失败:', error);
        }

        this.firstTile.classList.add('matched');
        this.secondTile.classList.add('matched');
        this.resetTiles();
        this.checkGameOver();
      }, 500);
    } else {
      setTimeout(() => {
        this.firstTile.classList.remove('selected');
        this.secondTile.classList.remove('selected');
        this.resetTiles();
      }, 1000);
    }
  }

  resetTiles() {
    this.firstTile = null;
    this.secondTile = null;
  }

  startTimer() {
    this.timeStart = Date.now();
    if (this.timerInterval) clearInterval(this.timerInterval);
    
    this.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.timeStart) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      this.timeElement.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  checkGameOver() {
    const unmatched = document.querySelectorAll('.tile:not(.matched)');
    if (unmatched.length === 0) {
      clearInterval(this.timerInterval);
      document.getElementById("final-time").textContent = this.timeElement.textContent;
      document.getElementById("final-moves").textContent = this.moves;
      this.modal.style.display = "flex";
    }
  }

  resetGame() {
    clearInterval(this.timerInterval);
    this.initializeGame();
  }
}

// 启动游戏
const game = new MemoryGame();
