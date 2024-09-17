let previous = 0;
let current = 1;

for (let i = 0; i < 50; i++) {
  console.log(current);
  let temp = previous;
  previous = current;
  current = temp + current;
}