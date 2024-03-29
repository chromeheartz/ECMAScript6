/*
    ***** spread *****

    spread
    기본적으로 변수를 가져와서 풀어 해치고 전개하는것.
    spread를 사용하기위해 기본적으로 필요한것은 ... 이다.
    점 세가 

    friends라는 array에 담겨있는 값들을 풀어해칠것이다.
    console.log(...friends)를 하면 안에 들어있는 변수들이 보일것이다. 
    1 2 3 4 

    만약 내가 두개의 array를 함께 넣어주고싶다면 
    js에서 두개의 array를 묶는다면.
    console.log(friends + family)하면 1,2,3,4a,b,c,d 이런식으로 스트링이 되엉버리고
    console.log([friends + faily])하면 array가 두개가 되버린다.

    이런때에 spread operator를 사용해야 한다.
    console.log([...friends, ...family])
    array가 필요한것이아니라 그 안의 element들이 필요하다.
    이런식으로 하면 하나의 array로 잘 출력이된다.

    object에도 적용이 가능하다.

    객체던 배열이던 마지막에 배열이면 배열, 객체면 객체 한번 감싸주고
    그 안에서 spread해주면 된다.

*/

// spread
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c", "d"];
console.log(friends); // array 채로있음
console.log(...friends); // array 안의 값들

const sexy = {
name: "bibi",
age: 30,
};

const hello = {
sexy: true,
hello: "hello",
};

console.log({ ...sexy, ...hello });
