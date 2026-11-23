'use strict';

function calculateOrder(event) {
  event.preventDefault();

  const quantityInput = document.getElementById('quantity');
  const productSelect = document.getElementById('product');
  const errorBox = document.getElementById('error');
  const resultBox = document.getElementById('result');

  const rawValue = quantityInput.value.trim();

  // Проверка корректности ввода регулярным выражением: только целые неотрицательные числа
  const numberPattern = /^\d+$/;

  if (!numberPattern.test(rawValue)) {
    errorBox.textContent = 'Ошибка: введите целое неотрицательное число (только цифры).';
    resultBox.textContent = '';
    return;
  }

  errorBox.textContent = '';

  const quantity = parseInt(rawValue, 10);
  const price = parseInt(productSelect.value, 10);

  if (quantity <= 0) {
    errorBox.textContent = 'Ошибка: количество должно быть больше нуля.';
    resultBox.textContent = '';
    return;
  }

  const total = price * quantity;
  resultBox.textContent = 'Стоимость заказа: ' + total + ' ₽';
}

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('order-form');
  form.addEventListener('submit', calculateOrder);
});
