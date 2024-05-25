//데이터 타입:
//기본[str,num,bool,null,undefined] + 참조
//참조[array]

// const a = [10, 20, 30, 40, 50];
// //a[2]; //30
// //a[4]; //50
// //console.log(a[0] + a[4]); //60

// a.push(60); //맨 뒤에 값 60 추가
// a.pop(); //맨 뒤에 값 제거

const menu = ["아메리카노", "라떼", "바닐라"];
//추가
menu.push("민트");
menu.push("딸기 스무디");
menu.push("디카페인");
menu.length; //6

//갱신
menu[0] = "빅아메리카노"; // 0번째 인덱스 값 갱신

//삭제
delete menu[3]; //3번째 인덱스 값 삭제 . 삭제한 인덱스 공간의 값은 비어있음.
menu.pop(); //맨 뒤값 삭제

console.log(menu);

//forEach 순회[한명씩 보기]
//v는 미지수
menu.forEach((v) => {
  console.log(v);
});

const nums = [1, 3, 5, 7, 9];
nums.forEach((x) => {
  console.log(x + 10); //11 13 15 17 19
});

nums.forEach((x) => {
  console.log(x ** x); //x의 x 제곱 수. 1 27 3125 823543 387420489
});
