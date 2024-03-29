/*
    ***** rest *****

    rest 와 destructuring을 함께 사용하면
    많은 것들을 활용할 수 있다.

    ** 특정 속성값 제외

    user라는 객체에서 password만 지우고싶다고 가정해보자.

    const user = {
        name : "nico",
        age : 24,
        password : 12345
    }
    보통은
    user["password"] = null
    이런식으로 지워줄것이다.
    null 값으로 만들어주긴 했는데 여전히 key에 password가 남아있다.

    const killPassword = ({ password, ...rest }) => rest;
    const cleanUser = killPassword(user);
    console.log(cleanUser);

    ** 
    1. {password, ...rest} 쪽으로 내가 원하는 것 빼고 나머지를 반환받을것이다.
    여기서는 password를 제외한 나머지를 반환받을것이니 
    여기에서는 destructuring과 rest operator를 같이 쓴것.

    2. implicit return으로 바로 리턴해줄수있다.
    => rest로 해준다

    3. cleanUser 변수를 만들어서 killPassword를 호출한 결과를 넣어줄것이다.
    
    이 방법으로 object를 지우거나 정리할 때 쓸수있다.

    ** 기본값 설정

    setCountry라는 함수를 만들고 이것은 Object를 전달받을 것이다.
    여기에는 object 의 country를 받아올것이다.
    이것은 destructuring 이다. 기억하기를.

    const userDefault = {
        name : "nico",
        age : 24,
        password : 12345
    }

    const setCountry = ({ country = "KR", ...rest}) => ({ country, ...rest})
    console.log(setCountry(user))

    setCountry는 기본값을 설정해줄것이다 country라는 key에 KR을 넣고 rest를 인자로 받고
    object를 return해줄것인데 country와 rest를 가지고있는 object를 return해줄것이다.
    이제 user는 "KR"을 기본값으로 하는 country 속성을 가지고있다.

    기본값설정할때에 여기서는 먼저 country값을 선택해서 기본값을 설정해주고 spread구문으로 return해주었다.
    const setCountry = ({ country = "KR", ...rest}) => ({ country, rest}) 이런식으로
    리턴값에 spread가 없다면 결국 객체 안의 객체 형식으로 들어오게 된다.

    * 정리
    만약 country값이 없다면 기본값을 KR 로 설정하고 rest 구문을 이용해서
    입력인자의 나머지값들을 하나로 축소했고 그리고 나서
    country와 함께 나머지를 갖고있는 rest 변수를 전개하여 return해준것이다.

    ** 속성명 바꾸기

    예를 들어 weirdObject라는 것이 있는데 이것은
    NAME 이라는 이상한 속성을 가지고 있다고 가정해보자.
    그래서 우리는 이것의 이름을 바꿔주는 함수를 만들고싶다.

    이 함수는 아까처럼 object를 전달받아서 무언가를 return해줄것이다

    이번에도 destructuring먼저 해줄것이다.
    const rename = ({NAME:name, ...rest}) => ({name, ...rest});
    * 여기서 첫번쨰 ...rest 는 rest 구문이고 return해주는 ...rest 는 spread 구문이다. 
    NAME : name
    이 부분은 NAME을 가져와서 name으로 바꿈
    const로 변수 새로 만드는것이나 다름없다. destructuring의 일종으로 변수의 이름을 바꾸는것.
    이제 weirdObject의 NAME 부분은 소문자 name이랑 같은것이다.

    그 후에 나머지를 가져와서 바뀐 name값이랑 함께 다시 return해준다.

    *** 정리
    rest, spread, destructuring이 es6의 가장 큰 핵심 같은 개념이라고 볼 수있다.
    

*/

// 특정 속성값 제외
const user = {
    name : "nico",
    age : 24,
    password : 12345
}
// const killPassword = (user) 이런식으로 user를 전달받을 수 있겠지만 더 좋은 방식을 찾아볼것이다.

//  그냥 전달받는것이 아닌 destructuring을 통해서 전달
const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);
console.log(cleanUser);

// 기본값 설정
const userDefault = {
    name : "nico",
    age : 24,
    password : 12345
}

const setCountry = ({ country = "KR", ...rest}) => ({ country, ...rest})
console.log(setCountry(user))

// 속성명바꾸기
const weirdObject = {
    NAME : "nico",
    age : 24,
    password : 12345
}

const rename = ({NAME:name, ...rest}) => ({name, ...rest});
console.log(rename(user))