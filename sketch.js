let spriteSheet;
// 單一幀寬度為 整張圖寬 255 / 5 幀 = 51
const FRAME_W = 51;
const FRAME_H = 47;
const TOTAL_FRAMES = 5;
const FRAME_DELAY = 8; // 切換間隔（以 draw() 的 frame 計數為單位）

function preload() {
  spriteSheet = loadImage('1/all.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
}
function draw() {
  // 背景色：#cea395ff
  background('#f5c9eaff');

  // 計算目前幀
  const idx = floor(frameCount / FRAME_DELAY) % TOTAL_FRAMES;
  const sx = idx * FRAME_W;
  const sy = 0;

  // 放大三倍並置中繪製
  const SCALE = 3;
  const drawW = FRAME_W * SCALE;
  const drawH = FRAME_H * SCALE;
  const dx = width / 2 - drawW / 2;
  const dy = height / 2 - drawH / 2;

  // 使用 image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight)
  image(spriteSheet, dx, dy, drawW, drawH, sx, sy, FRAME_W, FRAME_H);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
