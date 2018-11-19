'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  OFFSET_X: 100,
  OFFSET_Y: 10,
  GAP: 10
};
var Bar = {
  WIDTH: 40,
  HEIGHT: 150,
  OFFSET_X: 50,
  OFFSET_Y: 20
};
var currentColor = '#000';

var renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000';
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || '#000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderRect(ctx, Cloud.OFFSET_X + Cloud.GAP, Cloud.OFFSET_Y + Cloud.GAP, Cloud.WIDTH, Cloud.HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, Cloud.OFFSET_X, Cloud.OFFSET_Y, Cloud.WIDTH, Cloud.HEIGHT, '#fff');
  ctx.textBaseline = 'hanging';
  renderText(ctx, 'Ура вы победили!', 150, 20);
  renderText(ctx, 'Список результатов:', 150, 40);
  var maxTime = Math.max.apply(Math, times); // максимальное время за которое пройдена игра

  for (var i = 0; i < names.length; i++) {
    currentColor = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.random() * 1).toFixed(1) + ')';
    renderText(ctx, names[i], Cloud.OFFSET_X + Bar.OFFSET_X + (Bar.OFFSET_X + Bar.WIDTH) * i, Cloud.HEIGHT - Cloud.GAP);
    renderRect(ctx, Cloud.OFFSET_X + Bar.OFFSET_X + (Bar.OFFSET_X + Bar.WIDTH) * i, Cloud.HEIGHT - Bar.OFFSET_Y, Bar.WIDTH, -(Bar.HEIGHT * times[i] / maxTime), currentColor);
  }

};
