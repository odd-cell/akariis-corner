const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a canvas with the specified dimensions
function createPlaceholder(width, height, gradient) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient
  const grd = ctx.createLinearGradient(0, 0, width, height);
  gradient.forEach((color, index) => {
    grd.addColorStop(index / (gradient.length - 1), color);
  });

  // Fill gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  // Add some noise for texture
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 2;
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas;
}

// Generate and save images
const images = [
  {
    path: 'public/images/games/untitled-roguelike/cover.jpg',
    width: 1920,
    height: 1080,
    gradient: ['#1a1a2e', '#16213e', '#0f3460']
  }
];

// Create directories if they don't exist
images.forEach(img => {
  const dir = path.dirname(img.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate images
images.forEach(img => {
  const canvas = createPlaceholder(img.width, img.height, img.gradient);
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(img.path, buffer);
  console.log(`Generated ${img.path}`);
}); 