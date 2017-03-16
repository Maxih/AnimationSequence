class AnimationSequence {
  constructor(bar, frames, completed = () => {}) {
    this.bar = bar;
    this.frames = frames;

    this.frameQueue = [];
    this.animating = false;

    this.completedCallback = completed;
    this.timeOut = null;
  }

  animate() {
    if(!this.bar || this.frames.length === 0)
      return;

    this.frameQueue = this.frameQueue.concat(this.frames);
    this.play();
  }

  pause() {
    this.animating = false;
    window.clearTimeout(this.timeOut);
  }

  play() {
    if(!this.animating)
      this._animateFrame();
  }

  _animateFrame() {
    if(this.frameQueue.length === 0)
      return;

    this.animating = true;

    let curFrame = this.frameQueue[0];
    let frameTime = curFrame[0];
    let frameProps = curFrame[1];

    this.timeOut = window.setTimeout(() => {
      this.frameQueue.shift();

      Object.keys(frameProps).forEach((prop) => {
        this.bar.style[prop] = frameProps[prop];
      });

      if(this.frameQueue.length > 0)
        this._animateFrame();
      else {
        this.animating = false;
        this.completedCallback();
      }

    }, frameTime);
  }
}
