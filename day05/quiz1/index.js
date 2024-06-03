import { data } from "./data.js";

//1. timeZone이 Europe인 데이터중에서
// ->phone,fullname,ipAddress 만 보여주기

//data안에 값 사용 할때 {} 무조건 써주기
// const a = data
//   .filter(({ timezone }) => timezone.includes("Europe"))
//   .map(({ phone, fullName, ipAddress }) => ({
//     phone,
//     fullName,
//     ipAddress,
//   }));
// console.log(a);

//2.id 가 짝수인 데이터중에서
//timezone[대륙]이랑 phone[-빼고] money[$를 빼고]를 가져오기

const b = data
  .filter(({ id }) => id % 2 == 0)
  .map(({ timezone, phone, money }) => ({
    timezone: timezone.split("/")[0],
    phone: phone.split("-").join(""),
    //phone: phone.replaceAll("-",""),
    money: money.split("$")[1],
    //money: money.replace("$",""),
  }));
console.log(b);

//3.America or Asia 데이터 중에서
//ipAddress[.을 지우고] fullName 앞이름[First name] creditcard로 변경후 가져오기

// const c = data
//   .filter(
//     ({ timezone }) =>
//       timezone.includes("America") || timezone.includes("Asia")
//   )
//   .map(({ ipAddress, fullName, CreditCardType }) => ({
//     ipAddress: ipAddress.split(".").join(""),
//     fullName: fullName.split(" ")[0],
//     creditcard: CreditCardType,
//   }));
// console.log(c);

//4. 달러가 25000~50000사이 데이터 와 timezone이 africa인 데이터 중에서
//timezone[수도만 가져오고] fullName 뒤이름[Family name] 가져오기

// const d = data
//   .filter(({ money, timezone }) => {
//     const isValidMoney =
//       Number(money.split("$")[1]) >= 25000 &&
//       Number(money.split("$")[1]) <= 50000;
//     const isValidTimezone = timezone.includes("Africa");
//     return isValidMoney && isValidTimezone;
//   })
//   .map(({ timezone, fullName }) => ({
//     timezone: timezone.split("/")[1],
//     fullName: fullName.split(" ")[1],
//   }));
// console.log(d);

//5. ipAddress [180.101.53.217] 중 뒷자리 세개의 수의 합이 15이하인 애들 중에서
//timezone, fullname, money 가져오기

// const e = data
//   .filter(({ ipAddress }) => {
//     const ipArr = [...ipAddress];
//     //ipArr에서 각각 인덱스 값중  마지막에오는 "."의 인덱스를 돌려줌
//     const lastIndex = ipArr.findLastIndex((v) => v == ".");
//     //마지막 .의 뒤에 숫자들만 남게 잘라주고 걔네들을 숫자화 시키고 누적시키기
//     const sum = ipArr
//       .splice(lastIndex + 1, ipArr.length)
//       .map((v) => Number(v))
//       .reduce((a, c) => a + c);
//     return sum;
//   })
//   .map(({ timezone, fullName, money }) => ({ timezone, fullName, money }));

// console.log(e);
