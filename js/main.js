// Simple spinning component example
AFRAME.registerComponent('spin', {
  schema: {
    speed: { default: 0.3 }
  },
  tick: function (time, delta) {
    this.el.object3D.rotation.y += this.data.speed * (delta / 1000);
  }
});
