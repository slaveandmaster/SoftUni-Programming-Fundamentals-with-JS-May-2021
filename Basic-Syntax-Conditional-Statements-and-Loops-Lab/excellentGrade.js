function excellentGrade(input) {
  const mark = Number(input);
  if (mark >= 5.5) {
    console.log(`Excellent`);
  } else {
      console.log(`Not excellent`);
  }
}
excellentGrade(5.5);
excellentGrade(4.35);
