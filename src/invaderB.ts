import CanvasUtil from './CanvasUtil.js';
import Invader from './Invader.js';

export default class InvaderB extends Invader {
  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.image = CanvasUtil.loadNewImage('./assets/Invader_B_1.png');
    const image3 = CanvasUtil.loadNewImage('./assets/Invader_B_1.png');
    const image4 = CanvasUtil.loadNewImage('./assets/Invader_B_2.png');
    this.invaderImage.push(image3);
    this.invaderImage.push(image4);
    this.score = 20;
    this.posY = maxY;
    this.posX = maxX;
  }
}
