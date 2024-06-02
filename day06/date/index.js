//String(asdf) = "asdf" 같은 의미임
//Number(123) = 123 같은 의미임
//Date() 도 String(),Number() 처럼 내장객체임

// const a= new Date()

//콘솔로그 - 2024 06 02 현재 시간

const test = new Date();
console.log(`${test.getDay()}`); //0~6  => 일요일~토요일
console.log(`${test.toLocaleString()}`); //현재 년도 월 일 시간
