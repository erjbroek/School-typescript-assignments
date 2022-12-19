import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
export default class SceneWin extends Scene {
  private continue: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.continue = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed('KeyS')) {
      this.continue = true;
    }
  }

  public update(elapsed: number): Scene {
    if (this.continue === true) {
      return new SceneStart(this.maxX, this.maxY)
    } return null;
  }

  public render(canvas: HTMLCanvasElement) {
    CanvasUtil.fillCanvas(canvas, "black");
    CanvasUtil.writeTextToCanvas(canvas, '[You lost!]', canvas.width / 2, canvas.height / 2 - 270, 'center', 'ScoreFont', 50, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'Press S to restart', canvas.width / 2, canvas.height / 2 - 210, 'center', 'ScoreFont', 40, 'white');
  }
}
