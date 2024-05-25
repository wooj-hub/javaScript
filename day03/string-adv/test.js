const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

fruits.forEach((x) => {
  console.log(x);
  console.log(x.toUpperCase());
});

fruits.forEach((x) => {
  //각 단어에서 a를 포함하면 true 아니면 false
  const bl = x.includes("a");
  console.log(`${x}는 a를 포함 ${bl}`);
});

fruits.forEach((x) => {
  //각 단어가 6글자 이상이면 대문자화 하고 아니면 해당 단어를 두번반복한 단어로 표시
  const leng = x.length;
  leng >= 6 ? console.log(x.toUpperCase()) : console.log(x.repeat(2));

  //강사님꺼 코드도 복사하기
});

fruits.forEach((x) => {
  //각 단어의 개수만큼 대문자화하여 반복해서 출력
  // const sz = x.length;
  // const y = x.toUpperCase();
  // console.log(y.repeat(sz));
  console.log(x.toUpperCase().repeat(x.length));
});
