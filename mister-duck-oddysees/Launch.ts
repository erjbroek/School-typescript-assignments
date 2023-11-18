import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import MouseListener from './MouseListener.js';
import StartingScene from './StartingScene.js';
import CanvasUtil from './CanvasUtil.js';

export default class Starting1Scene extends Scene {
  public startingImage: HTMLImageElement;

  public readyGame: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.maxX = maxX;
    this.maxY = maxY;
    this.readyGame = false;
  }

  /**
   *
   * @param keyListener
   * @param mouseListener
   * @param keyListener
   * @param mouseListener
   */
  public processInput(keyListener: KeyListener, mouseListener: MouseListener): void {
    // console.log(mouseListener.getMousePosition());
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): Scene {
    if (this.readyGame === true) {
      return new StartingScene(this.maxX, this.maxY);
    } return null;
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
  }
}
