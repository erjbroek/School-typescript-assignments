import CanvasUtil from './CanvasUtil.js';
import Invader from './Invader.js';

export default class InvaderC extends Invader {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/Invader_C_1.png');
    const image5 = CanvasUtil.loadNewImage('./assets/Invader_C_1.png');
    const image6 = CanvasUtil.loadNewImage('./assets/Invader_C_2.png');
    this.invaderImage.push(image5);
    this.invaderImage.push(image6);
    this.score = 30;
    this.posY = maxY;
    this.posX = maxX;
  }
}
