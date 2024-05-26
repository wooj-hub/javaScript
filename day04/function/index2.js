//함수 : input[str,num,bool,array,element,function] -> output
//콜백 함수 : 함수안에 함수를 넣는거

// function test(x){
//     //x의 타입은 뭔지 몰라서 x.toLower 같은게 안뜸
//     return 100;
// }

// test(300) * test(300) // 10000

// function abc(x){
//     x(); //x에 kim 들어오면 kim() 함수 실행
//     return 1
// }

// function name(){
//     console.log(`${x}야 안녕!`);
// }

// function kim(){
//     console.log(`김씨 안녕`);
// }

// name("장원영");
// name("안유진");
// kim();
// abc(kim); //x에도 함수가 들어갈 수 있다.

////////////////////
// function getTen() {
//   return 10;
// }

// //같은 의미 화살표함수
// const getTen_ = () => {
//   return 10;
// };

// function getOne() {
//   return 1;
// }

// //같은 의미 화살표 함수
// const getOne_ = () => 1;

// function abc(x, y) {
//   return x() + y();
// }
// //같은 의미 화살표 함수
// const abc = (x, y) => x() + y();

// abc(getTen, getOne); // 11

//////////////
const arr = [1, 10, "apple", "banana", 3];

const test = (x) => {
  console.log(`${x} 입니다.`);
};
arr.forEach(test);

//위에 두개를 합친거임.
arr.forEach((v) => {
  console.log(`${x} 입니다.`);
});
