//array, element, obj

//object 정의
const book = {
  title: "자바스크립트는 누가 만들었냐",
  price: 24000,
  author: ["전수효", "엄준식", "김민서"],
  publishedYear: {
    year: 2024,
    month: 5,
    day: 31,
  },
};

const book1 = {
  smallButtons: ["소득공제"],
  title: "자바스크립트는 왜 그 모양일까",
  author: {
    real: "더글라스 크락포드",
    editor: "박수현",
  },
  publishedCompany: "인사이트",
  publishedDate: {
    year: 2020,
    month: 5,
    day: 25,
  },
  rate: 6,
  revews: 1,
  saleIndex: 288,
};

//데이터 가져오기
//1.dot 연산자
console.log(book1.title);
console.log(book1.author.editor);

//2.bracket 연산자
console.log(book1["title"]);
console.log(book1["author"]["editor"]);

//데이터 추가
book1.isBestSeller = true; // isBestSeller = true 이 값이 추가됨

//데이터 삭제
delete book1.title; //title값 삭제

//데이터 존재 유무
"title" in book1; //title 이 있는지

book1.keys(); // keys 값들만 돌려주기
book1.values(); //values 값들만 돌려주기
