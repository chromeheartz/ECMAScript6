/*
    ***** Array.find() *****

    Array.find()는 조건이 있어야한다.
    각각 배열의 item들에게 조건에 맞는 배열의 값을 반환해준다.
    true를 return하면 찾은 것 중 첫번째 element를 알려준다.

    ***** Array.findIndex() *****

    가끔씩 element가 아니라 element의 위치를 찾고싶을때가 있다.
    Array.findIndex()는 find와 같다. 테스트할 function 이 있으며
    find자리에 findIndex를 써주면 어디에 element가 있는지 알려준다.

    element말고 element가 어디있는지 찾아서 수정할때 유용하다.

    const friends = [
        "nico@gmail.com",
        "bibi@barnes.com",
        "kkamzzu@naver.com",
        "js@bonmi.com"
    ]

    const findIndex = friends.findIndex(friend => friend.includes("@barnes.com"));
    console.log(findIndex);
    const user = friends[findIndex] = friends[findIndex].split("@")[0];
    console.log(user);
    const email = "bibiboy.co.kr"
    console.log(`${user}@${email}`);

    이런식으로 split으로 @를 기준으로 앞뒤로 자르고 앞의 인덱스를 가져와서
    새로운 이메일 형식으로 고쳐서 출력시키는것도 가능. 

    const check = () => friends.findIndex(friend => friend.includes("@barnes.com"));
    let findIndex = check(); // 뒤에가 @barnes.com인 사람을 찾아냄
    console.log(findIndex);
    const user = friends[findIndex] = friends[findIndex].split("@")[0];
    console.log(user);
    const email = "bibiboy.co.kr"
    console.log(`${user}@${email}`);
    friends[findIndex] = `${user}@${email}`;
    target = check();
    console.log(friends);

    이런식으로 하게된다면 최종값은 배열이 아닌 -1이 반환된다.
    왜냐하면 그 배열안에서 check()에서 걸러진 아이템의 인덱스를 최종적으로 반환하기때문.

    * 풀이

    배열을 만들고 첫번째 호출하면 check를 해서 findIndex를 얻게 된다.
    이 findIndex는 @barens.com을 가지고있는 사람의 인덱스이다.
    만약에 찾았다면 콘솔로 찍어보는데 1이 출력될것이다.
    그리고 user를 가지고 올것인데 문자열을 @로 쪼개고 첫번째 배열의 아이템만 가져오고
    email을 수정하고 friens[1]은 유저@이메일이 될것이다.

    const check = () => friends.findIndex(friend => friend.includes("@barnes.com"));
    let findIndex = check(); // 뒤에가 @barnes.com인 사람을 찾아냄
    if (findIndex !== 1) {
        console.log(findIndex);
        const user = friends[findIndex] = friends[findIndex].split("@")[0];
        console.log(user);
        const email = "bibiboy.co.kr"
        console.log(`${user}@${email}`);
        friends[findIndex] = `${user}@${email}`;
        target = check();
    }
    console.log(friends);

    조건문을 걸어서도 사용가능.

    ***** Array.fill() *****
    
    Array.fill()은 array를 시작 index 부터 마지막 index 까지 
    static value로 채우는것이다.
    array 가져와서 value로 채울것이다

    ***** Array.includes() *****

    array에서 어떤걸 갖고있는지 알고 싶을때 하면된다.
    가지고 있는지에 대한 여부에 따라서
    true 나 false를 반환한다
*/

const friends = [
    "nico@gmail.com",
    "bibi@barnes.com",
    "kkamzzu@naver.com",
    "js@bonmi.com"
]

// Array.includes()
console.log(friends.includes("nico@gmail.com"));

// Array.find()
const target = friends.find(friend => friend.includes("@barnes.com"));
console.log(target);

// Array.findIndex()
const findIndex = friends.findIndex(friend => friend.includes("@barnes.com"));
console.log(findIndex);
const user = friends[findIndex] = friends[findIndex].split("@")[0];
console.log(user);
const email = "bibiboy.co.kr"
console.log(`${user}@${email}`);
friends[findIndex] = `${user}@${email}`;
console.log(friends);

// Array.fill()

const fillFriends = [
    "nico@gmail.com",
    "bibi@barnes.com",
    "kkamzzu@naver.com",
    "js@bonmi.com"
]

const fillCheck = () => fillFriends.findIndex(fillFriend => fillFriend.includes("@barnes.com"));

let fillTarget = fillCheck();

if (fillTarget !== -1) {
    fillFriends.fill("*".repeat(5),fillTarget,fillTarget+2) // default value, start index, last index    
}
console.log(fillFriends)

// Array.includes()
console.log(fillFriends.includes("nico@gmail.com"));
// true