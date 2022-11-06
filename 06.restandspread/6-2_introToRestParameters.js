/*
    ***** rest parameters *****

    parameter(매개변수)라는것은 우리가 함수에게
    전달하는 인자들을 이야기하는 것이다.

    그럼 rest parameter은 무엇일까
    이것을 제일 잘 설명하려면 끝도없는 parameter를 전달받는 함수를 만들어보면 된다,

    알다시피 spread에서 ... 이 점 세개는 변수를 전개하는 것이다.
    rest에선 축소(contract) 시킨다.

    const infiniteArgs = (...kimchi) => console.log(kimchi);

    infiniteArgs(
        "bibi",
        1,
        true,
        false,
        null,
        [1,2,34,4],
        "blabla"
    )

    간단하게 이런식으로 짜면 infiniteArgs함수에 엄청나게 많은 인자들을 보내준다 
    전같으면 const infiniteArgs = ({ first, second ...}) => ...; 비구조화 하는것처럼
    이런식으로 썼겠지만
    하나의 변수를 만들어 ... 을 찍어주면 그 안에 몇개의 인자를 받아주던
    한 배열로 만들어서 반환해준다.

    ** rest는 모든 값을 하나의 변수로 축소(contract)시킨다.
    우리가 해준것은 똑같이 ... 를 찍은것 뿐이지만
    저 의미는
    무슨 값이 있던간에  전부다 kimchi라고 불리는 변수안에 넣자. 라는 뜻. 

    *** rest 기능의 핵심

    절친 리스트가 있다고 가정해보자. 거기서 제일 친한 첫번째 친구만을 빼고싶을때
    const bestFriendsMaker = (firstFriend, ...rest) => {
        console.log(`my best friend is ${firstFriend}`);
        console.log(rest);
    };
    bestFriendsMaker("bibi", "kkamzzu", "chocho", "ed")

    rest(나머지)라는 변수를 많이 쓰기도 하지만 원하는 변수를 넣어도된다.
    저런식으로 순번에 맞게 가져오고 rest(나머지)는 다른곳에다가 저장할 수 있다.

    ** rest 는 array를 만든다
    ** ... sparead와도 같은 문법이지만 * parameter에 들어가게되면 rest 구문으로 실행 

*/

// rest example
const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs(
    "bibi",
    1,
    true,
    false,
    null,
    [1,2,34,4],
    "blabla"
)

// rest friends
const bestFriendsMaker = (firstFriend, ...rest) => {
    console.log(`my best friend is ${firstFriend}`);
    console.log(rest);
};
bestFriendsMaker("bibi", "kkamzzu", "chocho", "ed")