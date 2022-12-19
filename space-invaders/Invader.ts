import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import InvaderA from './InvaderA.js';
import InvaderBullet from './InvaderBullet.js';
import ShooterBullet from './ShooterBullet.js';

export default abstract class Invader extends Drawable {
  protected invaderImage: HTMLImageElement[];

  protected timeToNextMove: number;

  protected timeBetweenMoves: number;

  protected timesMoved: number;

  protected nextFire: number;

  protected randomTime: number;

  protected score: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.invaderImage = [];
    this.timeToNextMove = 0;
    this.timesMoved = 1;
    this.timeBetweenMoves = 0;
    this.nextFire = (Math.random() * 3 + 7) * 1000;
  }

  public getScore(): number {
    return this.score;
  }

  public collidesWithBullet(item: ShooterBullet): boolean {
    if ((this.posY + this.image.height) >= item.getPosY()
    && this.posY <= item.getPosY()
    && (this.posX <= item.getPosX()
    && item.getPosX() < this.posX + this.image.width)) {
      return true;
    } return false;
  }

  public willFire(elapsed: number): boolean {
    this.nextFire -= elapsed;
    if (Math.random() >= 0.999) {
      return true;
    } return false;
  }

  public fire() {
    return new InvaderBullet(this.posX, this.posY);
  }

  public update(elapsed: number) {
    this.timeToNextMove += elapsed;
    this.timeBetweenMoves += elapsed;
    if (this.timeBetweenMoves < 6000) {
      if (this.timeToNextMove >= 500) {
        if (this.timesMoved % 2 === 0) {
          this.image = this.invaderImage[0];
        } else {
          this.image = this.invaderImage[1];
        }
        this.timeToNextMove = 0;
        this.timesMoved += 1;
        this.posX += 10;
        if (this.timesMoved % 12 === 0) {
          this.posX -= 8;
          this.timesMoved = 0;
          this.posY += 30;
        }
      }
    }
    if (this.timeBetweenMoves >= 6000 && this.timeBetweenMoves <= 12000) {
      if (this.timeToNextMove >= 500) {
        this.timeToNextMove = 0;
        this.timesMoved += 1;
        this.posX -= 10;
        if (this.timesMoved % 2 === 1) {
          this.image = this.invaderImage[0];
        } else {
          this.image = this.invaderImage[1];
        }
        if (this.timesMoved % 12 === 0) {
          this.posX += 8;
          this.timesMoved = 0;
          this.posY += 20;
        }
      }
    }
    if (this.timeBetweenMoves >= 12000) {
      this.timeBetweenMoves = 0;
    }
  }
}
