for (let i = 1; i <= 100; i++) {
  let sol = "";
  if (i % 3 == 0) {
    sol += "fizz";
  }
  if (i % 5 == 0) {
    sol += "buzz";
  }

  console.log(sol || i);
}
