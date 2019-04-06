/*
  Evan MacHale - N00150552
  01.04.19
  00.js
*/

const id = 's01';
let elw;
let canvas;

// The seed that will spawn our p5 sketch.
const s01 = (p) => {

  p.setup = () => {
    elw = document.getElementById(id).offsetWidth;
    let canvas_size = elw;
    canvas = p.createCanvas(canvas_size,canvas_size);
    canvas.parent(id);
    p.colorMode(p.HSB);
  }

  p.draw = () => {
    p.frameRate(30);
    p.scale(0.5);
    p.translate(p.width, p.height);
    p.stroke(p.frameCount/5,70,80);
    p.background(255,0.5);
    for (let i = 0; i < 30; i++) {
      let x1 = p.x1(p.frameCount + i);
      let y1 = p.y1(p.frameCount + i);
      let x2 = p.x2(p.frameCount + i);
      let y2 = p.y2(p.frameCount + i);
      p.line(x1, y1, x2, y2);
    };
  }
  
  p.x1 = (i) => {
    return Math.sin(i/10) * 500 + Math.sin(i/15) * 1000;
    // return Math.sin(i/10) * 500;
  }

  p.y1 = (i) => {
    return p.map(Math.sin(i/10),-1,1,100,p.width-100)
    // return Math.cos(i/15) * 500;
  }

  p.x2 = (i) => {
    return Math.sin(i/10) * 500 + Math.sin(i) * 2;
    // return Math.sin(-i/15) * 500;
  }

  p.y2 = (i) => {
    return Math.sin(i/50) * 1000 + Math.cos(i/12) * 20;
    // return Math.cos(i/15) * 100;
  }
  
  p.windowResized = () => {
    p.resizeCanvas(elw, elw);
  }

}

export default s01;