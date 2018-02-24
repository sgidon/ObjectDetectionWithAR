"use strict"

import 'babel-polyfill';
const dl = require("deeplearn");
import { SqueezeNet } from 'deeplearn-squeezenet';

const TOP_K_CLASSES = 1;
const IMG_LEN = 227;

let math;
let backend;
let gpgpu;

let squeezeNet;

let inferenceCanvas;

// AR側の変数定義その他
const arMark = document.getElementById('mark');
const arInfo = document.getElementById("info");
const arScene = document.getElementById("scene");
const textGrp = document.getElementById("textGroup");

const resizeCanvas = document.createElement("canvas");
resizeCanvas.width = IMG_LEN;
resizeCanvas.height = IMG_LEN;
const odImg = document.getElementById("od-img");

async function ready() {
  inferenceCanvas = document.getElementById('inference-canvas');

  const gl = dl.gpgpu_util.createWebGLContext(inferenceCanvas);
  gpgpu = new dl.GPGPUContext(gl);
  backend = new dl.MathBackendWebGL(gpgpu);
  const safeMode = false;
  math = new dl.NDArrayMath(backend, safeMode);
  dl.ENV.setMath(math);

  squeezeNet = new SqueezeNet(math);

  await Promise.all([squeezeNet.load()]);
}

window.addEventListener('click', (env) => {
  // トラッキングロスト状態の場合は終了
  if (arMark.getAttribute('color') !== 'green') {
    arInfo.innerHTML = "tracking lost. もう一度実行してください";
    return;
  }

  // 検知中はマーカーとAR表示は非表示とする。
  arMark.object3D.visible = false;
  textGrp.object3D.visible = false;
  arInfo.innerHTML = "検知中...";

  setTimeout(() => {

    // Canvasをリサイズして別Canvasへ出力する。
    const arCanvas = arScene.canvas;
    const SCALE = arCanvas.width > arCanvas.height
      ? arCanvas.height / IMG_LEN | 0
      : arCanvas.width / IMG_LEN | 0;
    const startW = (arCanvas.width - IMG_LEN * SCALE) / 2 | 0;
    const startH = (arCanvas.height - IMG_LEN * SCALE) / 2 | 0;
    const ctx = resizeCanvas.getContext('2d');
    ctx.drawImage(arCanvas, startW, startH, IMG_LEN * SCALE, IMG_LEN * SCALE
      , 0, 0, IMG_LEN, IMG_LEN);
  
    // 検知処理実行
    detection();
  
    // 検知処理後はマーカーとAR表示を表示する。
    arMark.object3D.visible = true;
    textGrp.object3D.visible = true;

    // 検知に使用した画像を表示
    odImg.src = resizeCanvas.toDataURL("image/png");

  }, 100);

 }, false);

function detection() {

  math.scope(async () => {
    // 物体検知処理実行
    const startTime = performance.now();
    const pos = arMark.getAttribute("position").clone();
    const image = dl.fromPixels(resizeCanvas, 3);
    const inferenceResult =
      squeezeNet.predictWithActivation(image, 'conv10');
    const topClassesToProbability = await squeezeNet.getTopKClasses(
      inferenceResult.logits, TOP_K_CLASSES);
    const endTime = performance.now();

    // 処理時間計測
    const elapsed = Math.floor(1000 * (endTime - startTime)) / 1000;
    console.log("elapsed: " + elapsed);

    // 検知した物体名を取得
    let count = 0;
    let prob = '';
    let str;
    for (const className in topClassesToProbability) {
      if (!(className in topClassesToProbability)) {
        count++;
        continue;
      }
      str = className.split(",")[0];
      prob = (Math.floor(1000 * topClassesToProbability[className]) / 1000)
        .toString();
      console.log(`class${count}: ${className}`);
      console.log(`prob${count}: ${prob}`);
      count++;
      break;
    }

    // 検知した物体名を表示
    console.log(`str: ${str}`);
    arInfo.innerHTML = `「${str}」を検知しました。(${elapsed}msec)`;

    // テキストEntity作成
    const textEntity = document.createElement("a-entity");
    textEntity.setAttribute("mixin", "text");
    textEntity.setAttribute("position", pos); 
    textEntity.setAttribute("text", "value:" + str);

    // アニメーションEntity作成
    const anime = document.createElement("a-animation");
    anime.setAttribute("mixin", "textAnime");

    // anime -> text -> textGroup 追加 
    textEntity.appendChild(anime);
    textGrp.appendChild(textEntity);
  });

}

ready();
