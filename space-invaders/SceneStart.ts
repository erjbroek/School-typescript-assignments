import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import Scene from './Scene.js';

export default class SceneStart extends Scene {
  private starting: boolean;

  private logo: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.logo = CanvasUtil.loadNewImage('./assets/logo.png');
    this.starting = false;
  }

  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) {
      this.starting = true;
    }
  }

  public update(elapsed: number): Scene {
    // Load scene when starting.
    if (this.starting) return new Level1(this.maxX, this.maxY);
    return null;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.fillCanvas(canvas, '#000');
    CanvasUtil.drawImage(canvas,
      this.logo,
      (canvas.width / 2) - (this.logo.width / 2),
      (canvas.height / 2) - (this.logo.height / 2));
    CanvasUtil.writeTextToCanvas(canvas, '[S] TO START', canvas.width / 2, canvas.height / 2 + 300, 'center', 'ScoreFont', 50, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'Versie 1.0.4', canvas.width / 2, canvas.height / 2 - 270, 'center', 'ScoreFont', 50, 'white');
  }
}
