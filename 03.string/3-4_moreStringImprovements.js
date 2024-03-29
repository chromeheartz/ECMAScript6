/*
    ***** string method *****

    es6에 처음 도입된 4가지 string method

    **** String.prototype.includes()

    includes는 내가 찾고 싶은 문자가 있는지 확인해준다
    const isEmail = email => email.includes("@")
    console.log(isEmail("bibi@barnes.com"));

    function을 만들어서 체크할 수 있다.
    만약 내가 찾고싶은 문자가 있다면 true를 반환할것이다.

    **** String.prototype.repeat()

    repeat은 원하는 어떤 글자든 반복할 수 있다.
    
    만약 신용카드 뒷자리만 두고 앞에 10자리를 *로 표현하고 싶다면

    const CC_NUMBER = "0588" 
    const displayName = `${"*".repeat(10)}${CC_NUMBER}`;  
    "*".repeat(10)을 감싼이유는 안감싸면  template literal에 의해 문자열이 되기 때문
    console.log(displayName)

    **** String.prototype.startsWith()

    startsWith는 어떤 string으로 시작하는지 본 후에 true , false를 반환
    const name = "Mr. bibi";
    console.log(name.startsWith("Mr"))
    true를 반환한다

    **** String.prototype.endsWith()

    endsWith도 같은 맥락으로 맨 뒤에 단어를 확인 후 true, false를 반환한다.

    * * * *
    이것들은 유효성 검사할때 사용할 수 있다.
    includes는 이메일을 체크할때, endsWith는 .com으로 끝나는지 등등
*/

// includes

const isEmail = email => email.includes("@")
console.log(isEmail("bibi@barnes.com"));

// repeat
const CC_NUMBER = "0588" 
const displayName = `${"*".repeat(10)}${CC_NUMBER}`;
console.log(displayName)

// startsWith
const name = "Mr. bibi";
console.log(name.startsWith("Mr"))

// endsWith
const mail = "bibi@gmail.com";
console.log(mail.endsWith(".com"));
