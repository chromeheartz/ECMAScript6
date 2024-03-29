/*
    ***** for of loop *****

    루프의 상태를 알아보자.
    루프는 기본적으로 같은일을 반복하는것이다.

    예를들어
    for (let i = 0; i < 20; i ++){
        console.log("i love kimchi");
    }
    기본값을 0으로 할당하고 i가 20보다 작을때 콘솔 구문이 시작되고
    그 후에 i++ 으로 i가 1이 되었다가 2가 되었다가 점점 수가 올라가고 20보다작을때 멈춘다.

    별로 좋지않다. 만약 엘리먼트에 무언가를 해주고 싶다면 

    const friends = ["bibi", "kkamzzu", "chocho", "block"]

    for(let i = 0; i < 20; i++){
        console.log(`${i} i love kimchi`)
    }
    배열에 있는 갯수까지만 잘 출력이 되고 나머지는 undefine가 뜬다.
    이런 경우를 피하면서 단지 friends 각각을 위해 숫자를 세거나 무언가를 하고싶다면 어떻게 해야할까.

    ***** forEach *****

    forEach는 배열에 있는 각각의 엘리먼트에 대해 특정한 액션을 실행한다.
    그러니 나는 특정한 액션을 선언하고 각각의 엘리먼트 들에게 실행할 수 있는것이다.

    const friends = ["bibi", "kkamzzu", "chocho", "block"]
    const addHeart = c => console.log(c);
    friends.forEach(addHeart)

    // friends.forEach((c,i,a) => console.log(c,i,a)) 로 arrow function으로도 가능.

    forEach는 addHeart를 호출하는데 이것은 currentitem과 함꼐 호출될것이다.
    current item이 함수의 첫번째 인자가 될것이고

    * 또한 forEach는 index와도 함께 호출이가능
    indedx는 두번째 인자가 될것이다

    세번째 인자는 current array 현재의 배열을 준다.

    * forEach는 array에서만 가능.

    ***** for of *****

    for (const friend of friends) {
        console.log(friend)
    }
    이런식으로 for of를 써서 출력해줘도 이름이 잘 출력된다.
    let i = 0 ; ... 어쩌구 보다는 나아진것같다.
    이것은 forEach보다 좋은 특징이 있다.

    * const 혹은 let으로 선언할지를 선택할 수 있다.

    for of는 array에서 뿐만 아니라 *iterable* 한것에서 모든 가능하다.
    iterable은 루프가 가능하다는 뜻.

    for (const letter of "this is looooooong") {
        console.log(letter);
    }
    string도 for of로 풀어줄 수 있다.
    NodeList(유사배열), Typedarray, map, set 도 가능

    ** for of의 가장 좋은 점은 루프를 멈출 수 있는것이다

    const manyFriends = [
        "bibi",
        "kkamzzu",
        "kany",
        "chocho",
        "block",
        "tori",
        "wooram",
        "jkyung",
        "ahyeon",
        "jaewoong"
    ]
    이런 배열에서 예를들어 데이터베이스에 이름들을 보내주다가
    wooram을 찾는순간 멈추고싶다
    forEach를 사용하면 멈출 수 없다.

    for (manyFriend of manyFriends) {
        if (manyFriend === "jkyung") {
            break;
        } else {
            console.log(manyFriend);
        }
    }

    for of안에서 조건문으로 조건을 걸어서 break로 빼주면 가능하다.
    
    * 정리
    for of는 루프를 사요할 수 있게 해주고
    멈추고 싶을때 멈추게 해준다.
    데이터베이스에 뭔가를 보내고 싶을때 데이터베이스가 꽉찼다면 보내지않고
    공간이있다면 보낼수있다. 공간이 없다면 에러를 뱉을테니 멈추게 해줄수있고
    마지막으로 기억해야할것은 for of는 iterable한 모든것에 사용이 가능.
*/

    const friends = ["bibi", "kkamzzu", "chocho", "block"]

    // forEach

    const addHeart = (c, i, a) => console.log(c, i, a);
    friends.forEach(addHeart)

    // for of
    for (const friend of friends) {
        console.log(friend)
    }

    // for of iterable
    for (const letter of "this is looooooong") {
        console.log(letter);
    }

    // stop loop / for of
    const manyFriends = [
        "bibi",
        "kkamzzu",
        "kany",
        "chocho",
        "block",
        "tori",
        "wooram",
        "jkyung",
        "ahyeon",
        "jaewoong"
    ]
    for (manyFriend of manyFriends) {
        if (manyFriend === "jkyung") {
            break;
        } else {
            console.log(manyFriend);
        }
    }
    