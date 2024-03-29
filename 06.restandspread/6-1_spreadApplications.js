/*
    ***** add, merge , update *****

    * 기본적으로 array, object에 둘다 사용이 가능.

    1. add
    새로운 배열의 이름을 선언해주고 그 안의 
    spread한 배열과 새로 추가할것들을 할당

    const friends = ["bibi", "kkamzzu"]
    const newFriends = [...friends, "chocho"];
    console.log(newFriends);
    여기서 우리는 push를 하지 않았다 . 그 이유는 새로운 배열에 넣고싶기때문
    friends에 추가하는것이 아닌.
    기존 데이터를 복사해서 새로운 데이터를 만들고 싶을때 사용하는 방식 

    const newFriends = ["chocho", ...friends];순서 바꾸기도 가능

    2. merge
    기존에 없던것들을 합치면서 순서를 배치해줄수 있음.

    const first = ["mon", "tue", "wed"]
    const weekend = ["sat", "sun"]
    const fullWeek = [...first, "thu", "fri", ...weekend]
    console.log(fullWeek)

    기존 first 라는 변수와 weekend에는 값을 일주일로 채우고싶지만
    수요일 목요일이 빠져있다.
    그럴 때에 const fullWeek = [...first, "thu", "fri", ...weekend] 이런식으로도
    원하는 자리, 순서에 내가 값을 넣어서 다른 배열로 return 시켜 받을 수도있다.

    ** conditional(조건부)

    조건부 object 예를 들어 user라는 객체가 있는데,
    lastName이 있는지 없는지 모른다.
    어떻게 lastName을 추가해야할까 조건부로

    이것이 우리가 궁극적으로 마주할 질문이다
    "어떻게하면 object에 속성(property)를 조건부로 추가할 수 있을까"

    const lastName = prompt("Last Name")
    const user = {
        name : "bibi",
        age : 30,
        lastName : lastName !== "" ? lastName : undefined
    }
    console.log(user);

    이 상황에서 prompt에 아무것도 입력하지 않으면 lastName은 undefined가 나오게된다.
    하지만 무언가 입력하면 잘 들어온다
    하지만 아무것도 없을때 만약 lastName을 아예 넣고싶지않다면?
    undefined가 아닌 아예 key 값 자체를 받고싶지 않다면 어떻게 해야할까.

    이때가 spread가 아주 유용하게 쓰이는 순간이다.
    ...(lastName !== "" && { lastName })
    이런식으로 조건부로 넣어주는것인데 조금 어렵다.

    1. && 을 써서 두 구문모두가 true가 되었을때 실행되도록한다.
    빈 문자열이 아니거나 값이 있을때 
    prompt에 값을 넣으면 두번째 구문에 값이 들어가게 될것이다.

    2. 객체를 볼때에 key와 value가 값이 같으니
    lastName 으로 그냥 써준다.
    lastName : lastName 인 shorthand property 

    3. ... 이 세개의 점이 조건의 결과를 전개할것이다.

    4. 전개할 경우에 ... 를 쓰려면 데이터가 object여야 하니까 lastName을 중괄호로 감싸줌

    이제 선택적인 방법으로 object를 구현할 수 있다,
    굉장히 좋은 단축적인 표현.

    * 선택적인 속성값 (optional object property)

*/

// add array
const friends = ["bibi", "kkamzzu"]
const newFriends = [...friends, "chocho"];
console.log(newFriends);

// add object
const barnes = {
    sexy : true,
    name : "bibi"
}
const newBarnes = {...barnes, bboy : true}
console.log(newBarnes)

// merge array
const first = ["mon", "tue", "wed"]
const weekend = ["sat", "sun"]
const fullWeek = [...first, "thu", "fri", ...weekend]
console.log(fullWeek)

// merge object
const krom = {
    kany : "asian",
    bucky : "barnes"
}
const heartz = {
    edward : "elric",
    loki : "locka"
}
const chromeheartz = {...krom, rad : "nation", ...heartz};
console.log(chromeheartz);

// conditional
const lastName = prompt("Last Name")
const user = {
    name : "bibi",
    age : 30,
    // lastName : lastName !== "" ? lastName : undefined
    ...(lastName !== "" && { lastName })
}
console.log(user);