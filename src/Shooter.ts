import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import InvaderBullet from './InvaderBullet.js';
import ShooterBullet from './ShooterBullet.js';

export default class shooter extends Drawable {
  private maxX: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX / 2;
    this.posY = maxY - 30;
    this.image = CanvasUtil.loadNewImage('./assets/Shooter.png');
  }

  public move(direction: number): void {
    if (direction === 1) {
      this.posX -= 2;
    }
    if (direction === 0) {
      this.posX += 2;
    }
  }

  public collidesWithBullet(item: InvaderBullet) {
    if ((this.posY + this.image.height >= item.getPosY()
    && this.posY <= item.getPosY()
    && (this.posX <= item.getPosX())
    && item.getPosX() < this.posX + this.image.width)) {
      return true;
    } return false;
  }

  public fire(): ShooterBullet {
    return new ShooterBullet(this.posX, this.posY);
  }
}
