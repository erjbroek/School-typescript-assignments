import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class SceneState extends Scene {
  private continue: boolean;

  private message: string;

  public constructor(maxX: number, maxY: number, message: string) {
    super(maxX, maxY);
    this.continue = false;
    this.message = message;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.continue = true;
    }
  }

  public update(elapsed: number): Scene {
    if (this.continue) return new SceneStart(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#000');
    CanvasUtil.writeTextToCanvas(canvas, `${this.message.toUpperCase()}`, canvas.width / 2, canvas.height / 2, 'center', 'ScoreFont', 50, 'red');
    CanvasUtil.writeTextToCanvas(canvas, '[space] to continue'.toUpperCase(), canvas.width / 2, canvas.height / 2 + 65, 'center', 'ScoreFont', 30, 'white');
  }
}
