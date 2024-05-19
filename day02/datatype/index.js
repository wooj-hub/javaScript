//const 변수 이름 = 데이터 [타입 : 기본 + 참조]
// 기본 타입: number, string, boolean(True, False), null(비어있다), undefined(정의되지않음)

// 타입 변환
// 1] 명시적 타입 변환[대놓고]
// 2] 암묵적 타입 변환[몰래]

// number화
// 1. Number("1004") [명시적]
// 2. passeInt(), parseFloat("3.14") [명시적]
// -parse:해석하세요, Int 정수, Float 실수
// -숫자 가 아닌 문자를 만나면 문자는 해석 안함.
// 3. +  ex) +"1004" [암묵적]

// 문자화
// 1.String(123) [명시적]
// 2.something + "문자" + something [암묵적]

// 불리언화
// 1.Boolean() [명시적] //true o
// ex) Boolean(100), Boolean(-100) //true
// ex) Boolean(-1),Boolean("스타벅스"),Boolean("메가커피") //true
// truthy or falsy
// true : 밑에 false 예시 빼고 다
// false : 0,-0,"",null,undefined,Nan
