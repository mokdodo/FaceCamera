// Generated by CoffeeScript 1.6.3
$(function() {
  var ci, face, facectx, h, ht, output, vi, w, x, y,
    _this = this;
  vi = document.getElementById("iv");
  ci = document.getElementById("ic");
  output = document.getElementById("output").getContext("2d");
  face = document.getElementById("face");
  facectx = face.getContext("2d");
  x = 0;
  y = 0;
  w = 0;
  h = 0;
  ht = new headtrackr.Tracker({
    ui: false,
    calcAngles: false
  });
  ht.init(vi, ci);
  ht.start();
  return document.addEventListener('facetrackingEvent', function(event) {
    var angle, gradient, scalex, scaley;
    w = event.width;
    h = event.height;
    x = event.x - w / 2;
    y = event.y - h / 2;
    angle = event.angle;
    facectx.clearRect(0, 0, 320, 240);
    facectx.drawImage(ic, 320 / 2 - event.x, 240 / 2 - event.y);
    facectx.save();
    facectx.translate(320 / 2, 240 / 2);
    facectx.rotate(angle - Math.PI / 2);
    scalex = 1;
    scaley = 1.5;
    facectx.scale(scalex, scaley);
    gradient = facectx.createRadialGradient(0, 0, w / 2 * 0.5, 0, 0, w / 2 * 0.8);
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, "rgba(0,0,0,255)");
    facectx.fillStyle = gradient;
    facectx.fillRect(-320 / 2 / scalex, -240 / 2 / scaley, 320 / scalex, 240 / scaley);
    facectx.restore();
    output.clearRect(0, 0, 320, 240);
    output.drawImage(bg, 0, 0);
    output.save();
    output.globalCompositeOperation = "lighter";
    output.drawImage(face, 0, 0);
    return output.restore();
  });
});
