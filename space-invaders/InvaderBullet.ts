import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class InvaderBullet extends Drawable {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posY = maxY;
    this.posX = maxX;
  }

  public update(elapsed: number) {
    this.posY += 3;
  }

  public override render(canvas: HTMLCanvasElement) {
    CanvasUtil.drawRectangle(canvas, this.posX, this.posY, 5, 13, 'white');
  }
}
