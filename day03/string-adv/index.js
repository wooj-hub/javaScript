const coffee = "americano";

//포함 유무
coffee.includes("cano"); // cano가 있으면 true를 리턴함.
//몇번째 있는지 물어보기
coffee.indexOf("i"); //해당 글자는 몇번째 있습니까? 인덱스값 4 반환. 없으면 -1
//바꾸기
coffee.replace("a", "z"); //a를 z로 바꿔주셈

//시작하는지 묻기
coffee.startsWith("ame"); //ame로 시작하니?? true//false

//끝나는지 묻기
coffee.endsWith("cano"); //cano로 끝나는지 true//false

//자르고 돌려주기
coffee.slice(0, 5); //ameri // 0이상 5미만 인덱스

//대문자 변경
coffee.toUpperCase(); //AMERICANO
//소문자 변경
coffee.toLowerCase(); //americano

//배열화
coffee.split("i"); // ["amer", "cano"]

//반복
coffee.repeat(3); //americanoamericanoamericano
