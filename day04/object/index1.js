const menu = [
  {
    coffeeName: "americano",
    coffeePrice: 2000,
    shot: 2,
    coffeeBean: "Arabica",
  },
  {
    coffeeName: "latte",
    coffeePrice: 2500,
    shot: 2,
    coffeeBean: "Arabica",
  },
  {
    coffeeName: "mocha",
    coffeePrice: 3500,
    shot: 2,
    coffeeBean: "Liberica",
  },
];

//quiz 가격이 3000원 이하인 애들만 필터링
const a = menu.filter((v) => v.coffeePrice <= 3000);
console.log(a);

//quiz 대문자화 and + 1000
const b = menu.map((v) => {
  v.coffeeName = v.coffeeName.toUpperCase();
  v.coffeePrice += 1000;
  //v로 리턴해줘야함
  return v;
});
console.log(b);

//quiz 이름이랑 샷만 남기기
const c = menu.map((v) => ({
  //새로운 오브젝트타입으로 정의하기
  //괄호 하나더 써줘야함
  coffeeName: v.coffeeName,
  shot: v.shot,
}));
