# goit-js-hw-01

Домашнє завдання №1 з JavaScript: функції, обчислення та повернення результату через `return`.

## Посилання

- [Репозиторій](https://github.com/RoSSoRS/goit-js-hw-01)
- [Жива сторінка](https://rossors.github.io/goit-js-hw-01/)

## Структура

```text
goit-js-hw-01/
├── js/
│   ├── task-1.js
│   ├── task-2.js
│   └── task-3.js
├── .gitignore
├── .prettierrc
├── index.html
└── README.md
```

## Розбір задач

| Файл           | Функція та параметри                              | Обчислення                           | Тип результату                                                    |
| -------------- | ------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| `js/task-1.js` | `makeTransaction(quantity, pricePerDroid)`        | `quantity * pricePerDroid`           | Рядок `You ordered <quantity> droids worth <totalPrice> credits!` |
| `js/task-2.js` | `getShippingMessage(country, price, deliveryFee)` | `price + deliveryFee`                | Рядок `Shipping to <country> will cost <totalPrice> credits`      |
| `js/task-3.js` | `getElementWidth(content, padding, border)`       | `content + padding * 2 + border * 2` | Число                                                             |

У третій задачі всі аргументи — числа, відповідно до наданого плану ДЗ. Значення
`padding` і `border` враховуються зліва та справа. Одиниці вимірювання до результату
не додаються.

## Перевірочні виклики

У файлах залишено такі виклики для перевірки ментором:

```javascript
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200
```

Додаткові приклади для самостійної перевірки у консолі:

```javascript
makeTransaction(2, 1250); // "You ordered 2 droids worth 2500 credits!"
makeTransaction(0, 500); // "You ordered 0 droids worth 0 credits!"
getShippingMessage("Ukraine", 99.5, 10.25); // "Shipping to Ukraine will cost 109.75 credits"
getElementWidth(10.5, 1.25, 0.5); // 14
getElementWidth(0, 0, 0); // 0
typeof getElementWidth(10.5, 1.25, 0.5); // "number"
```

## Запуск

Відкрийте `index.html` у браузері або перейдіть на живу сторінку. У DevTools →
Console з'являться дев'ять результатів. Функції доступні для додаткових викликів
у консолі. Зовнішні бібліотеки та встановлення залежностей не потрібні.

## Публікація

GitHub Pages публікує кореневу папку `/` гілки `main`.
