'use strict';

var COUNT_WIZARDS = 4;
var userDialog = document.querySelector('.setup');
var blockSetupSimilar = userDialog.querySelector('.setup-similar');
blockSetupSimilar.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
userDialog.classList.remove('hidden');

var getRandom = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var Wizard = {
  'FIRST_NAMES': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  'LAST_NAMES': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'COAT_COLORS': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'EYE_COLORS': ['black', 'red', 'blue', 'yellow', 'green']
};

// создаем объекты данных для волшебников
var createWizard = function (data) {
  var wizard;
  var arrayWizards = [];

  for (var i = 0; i < COUNT_WIZARDS; i++) {

    wizard = {
      'fullName': data.FIRST_NAMES[getRandom(0, data.FIRST_NAMES.length - 1)] + ' ' + data.LAST_NAMES[getRandom(0, data.LAST_NAMES.length - 1)],
      'coatColor': data.COAT_COLORS[getRandom(0, data.COAT_COLORS.length - 1)],
      'eyesColor': data.EYE_COLORS[getRandom(0, data.EYE_COLORS.length - 1)]
    };

    arrayWizards.push(wizard);
  }

  return arrayWizards;
};

var arrayWizards = createWizard(Wizard); // полученный массив волшебников с генерированными данными

// заполняем шаблон данными
var renderWizard = function (data) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = data.fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizardElement;
};

// отрисовываем волшебников
var renderWizards = function (templateWizard) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < COUNT_WIZARDS; i++) {
    fragment.appendChild(renderWizard(templateWizard[i]));
  }
  similarListElement.appendChild(fragment);

};
renderWizards(arrayWizards);
