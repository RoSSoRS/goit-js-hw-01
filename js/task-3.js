function getElementWidth(content, padding, border) {
  return content + padding * 2 + border * 2;
}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200
