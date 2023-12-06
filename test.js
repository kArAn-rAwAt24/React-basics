let n = 4,
  m = 2 * n;
for (let i = 0; i < n; i++) {
  str = '';
  for (let j = 0; j < m; j++) {
    if (j <= m / 2 + i && j >= m / 2 - i) {
      str += '*';
    } else {
      str += ' ';
    }
  }
  console.log(str);
}
