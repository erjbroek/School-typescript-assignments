import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';

export default class ShooterBullet extends Drawable {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX;
    this.posY = maxY;
  }

  public update(elapsed: number) {
    this.posY -= 20;
  }

  public override render(canvas: HTMLCanvasElement) {
    CanvasUtil.drawRectangle(canvas, this.posX, this.posY, 5, 13, 'white');
  }
}
