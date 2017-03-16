window.addEventListener("load", () => {

  // Basic configuration
  let basicBar = document.getElementById("basic-bar");

  let basicBarSequence = new AnimationSequence(basicBar, [
    [0, { width: '0%' }],
    [1000, { width: '10%' }],
    [200, { width: '20%' }],
    [1000, { width: '50%', }],
    [200, { width: '80%', }],
    [300, { width: '90%', }],
    [100, { width: '100%' }]
  ]);

  basicBarSequence.animate();

  // Repeating bar configuration
  let repeatingBar = document.getElementById("repeating-bar");
  let repeatCount = document.getElementById("repeat-count");

  let loops = 0;

  let repeatingBarSequence = new AnimationSequence(repeatingBar, [
    [0, { transform: 'rotate(0deg)' }],
    [1000, { transform: 'rotate(60deg)' }],
    [500, { transform: 'rotate(120deg)' }],
    [200, { transform: 'rotate(180deg)' }],
    [300, { transform: 'rotate(120deg)' }],
    [500, { transform: 'rotate(60deg)' }],
    [500, { transform: 'rotate(0deg)' }],
  ], () => {
    repeatingBarSequence.animate();
    repeatCount.innerText = ++loops;
  });

  repeatingBarSequence.animate();

  // Interactive configuration
  let interactiveBar = document.getElementById("interactive-bar");

  let interactiveBarSequence = new AnimationSequence(interactiveBar, [
    [0, { width: '0%' }],
    [1000, { width: '10%' }],
    [200, { width: '20%' }],
    [1000, { width: '50%', }],
    [200, { width: '80%', }],
    [300, { width: '90%', }],
    [100, { width: '100%' }],
    [1000, { width: '100%' }]

  ]);

  window.demoEnqueue = () => {
    interactiveBarSequence.animate();
  }

  window.pause = () => {
    interactiveBarSequence.pause();
  }

  window.play = () => {
    interactiveBarSequence.play();
  }

});
