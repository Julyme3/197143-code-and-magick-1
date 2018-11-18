'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_OFFSET_X = 50; // расстояние между колонками
var BAR_OFFSET_Y = 20;
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
  renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
  ctx.textBaseline = 'hanging';
  renderText(ctx, 'Ура вы победили!', 150, 20);
  renderText(ctx, 'Список результатов:', 150, 40);
  var maxTime = Math.max.apply(Math, times); // максимальное время за которое пройдена игра

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      currentColor = 'rgba(255, 0, 0, 1)';
    } else {
      currentColor = 'rgba(0, 0, 255, ' + (Math.random() * 1).toFixed(1) + ')';
    }
    renderText(ctx, names[i], CLOUD_X + BAR_OFFSET_X + (BAR_OFFSET_X + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    renderRect(ctx, CLOUD_X + BAR_OFFSET_X + (BAR_OFFSET_X + BAR_WIDTH) * i, CLOUD_HEIGHT - BAR_OFFSET_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime), currentColor);
  }

};
