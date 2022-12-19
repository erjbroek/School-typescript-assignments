import CanvasUtil from './CanvasUtil.js';
import Invader from './Invader.js';
import InvaderA from './InvaderA.js';
import InvaderB from './invaderB.js';
import InvaderBullet from './InvaderBullet.js';
import InvaderC from './invaderC.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneWin from './SceneWin.js';
import SceneLost from './SceneLost.js';
import shooter from './Shooter.js';
import ShooterBullet from './ShooterBullet.js';

export default class Level1 extends Scene {
  private shooter: shooter;

  private continue: boolean;

  private invaders: Invader[];

  private playerBullet: ShooterBullet[];

  private invaderBullet: InvaderBullet[];

  private lives: number;

  private score: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.continue = false;
    this.shooter = new shooter(maxX, maxY);
    this.invaders = [];
    this.invaderBullet = [];
    this.playerBullet = [];
    for (let i = 0; i < 12; i++) {
      this.invaders.push(new InvaderC(i * 40, 40));
      this.invaders.push(new InvaderB(i * 40, 80));
      this.invaders.push(new InvaderB(i * 40, 120));
      this.invaders.push(new InvaderA(i * 40, 160));
      this.invaders.push(new InvaderA(i * 40, 200));
    }
    this.lives = 3;
    this.score = 0;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.isKeyDown(KeyListener.KEY_A)) {
      this.shooter.move(1);
    }
    if (keyListener.isKeyDown(KeyListener.KEY_D)) {
      this.shooter.move(0);
    }
    if (keyListener.isKeyDown(KeyListener.KEY_SPACE)) {
      if (this.playerBullet.length < 1) {
        this.playerBullet.push(this.shooter.fire());
      }
    }
  }

  public processPlayerBullet(elapsed: number) {
    this.invaders.forEach((invader) => {
      this.playerBullet.forEach((bullet) => {
        if (invader.collidesWithBullet(bullet)) {
          this.playerBullet.splice(this.playerBullet.indexOf(bullet), 1);
          this.invaders.splice(this.invaders.indexOf(invader), 1);
          this.score += invader.getScore();
        }
      });
    });
  }

  public processInvaderBullet(elapsed: number) {
    this.invaderBullet.forEach((bullet) => {
      if (this.shooter.collidesWithBullet(bullet)) {
        this.invaderBullet.splice(this.invaderBullet.indexOf(bullet), 1);
        this.lives -= 1;
      }
    });
  }

  public update(elapsed: number): Scene {
    this.processPlayerBullet(elapsed);
    this.processInvaderBullet(elapsed);
    this.invaders.forEach((item) => {
      item.update(elapsed);
    });
    this.invaders.forEach((bullet) => {
      if (bullet.willFire(elapsed)) {
        this.invaderBullet.push(bullet.fire());
      }
    });
    this.playerBullet.forEach((bullet) => {
      if (bullet.getPosY() <= 0) {
        this.playerBullet.splice(this.playerBullet.indexOf(bullet), 1);
      }
      bullet.update(elapsed);
    });
    this.invaderBullet.forEach((bullet) => {
      bullet.update(elapsed);
    });
    if (this.invaders.length <= 0) {
      return new SceneWin(this.maxX, this.maxY);
    }
    if (this.lives <= 0) {
      return new SceneLost(this.maxX, this.maxY);
    } return null;
  }

  public render(canvas: HTMLCanvasElement) {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.fillCanvas(canvas, 'Black');
    this.shooter.render(canvas);
    this.invaders.forEach((item) => {
      item.render(canvas);
    });
    this.playerBullet.forEach((bullet) => {
      bullet.render(canvas);
    });
    this.invaderBullet.forEach((bullet) => {
      bullet.render(canvas);
    });
    CanvasUtil.writeTextToCanvas(canvas, String(this.lives), canvas.width / 2, 40, 'center', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, `current score: ${this.score}`, canvas.width / 2, 70, 'center', 'Arial', 40, 'white');
  }
}
