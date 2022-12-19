import CanvasUtil from './CanvasUtil.js';
import Invader from './Invader.js';

export default class InvaderA extends Invader {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    const image1 = CanvasUtil.loadNewImage('./assets/Invader_A_1.png');
    this.image = image1;
    const image2 = CanvasUtil.loadNewImage('./assets/Invader_A_2.png');
    this.invaderImage.push(image1);
    this.invaderImage.push(image2);
    this.score = 10;
    this.posY = maxY;
    this.posX = maxX;
  }
}
