/*
    ***** template literal *****
    
    자바스크립트에서 변수를 가진 문자열 쓰는 방법에 대한 개선

    전에 했던 예제를 예로들면
    const sayHi = (aName = "anon") => "hello " + aName; 여기서
    "hello " + aName; 이 부분때문에 template literals가 생기게 된 이유라고 할 수 있다.
    왜냐면 문자열을 멈추고 다시 + 로 변수를 넣고 만약 텍스를 더 넣는다면 + "" 이런식으로 해주어야 한다.

    temlatesms "" 를 바꾸는것이다
    `` 이 백틱으로 감싸준다.
    
    `` 이것들 사이에 string을 넣으면 모든것들이 string이 될것이다.
    그럼 aName같은 변수들은 어떻게 string에 포함시킬 수 있을까
    ${aName} 처럼 $사인과 {} 안에 넣어주면 된다.

    console.log(`hello how are you ${100 * 32920}`);
    이것처럼 변수만 되는것이 아니라 표현식도 써줄수 있다.

    ***** string 안에서 function 실행 시키기 *****
    const add = (a,b) => a + b;
    console.log(`hello how are you ${add(6,6)}`);

    string안에서 function을 실행시키는 방식은 이런방식이다.
    ${add}라고 하면 그냥 소스코드가 보이게 됨.
*/

const sayHi = (aName = "anon") => `Hello ${aName}`;
console.log(sayHi());
console.log(`hello how are you ${100 * 32920}`);

const add = (a,b) => a + b;
console.log(`hello how are you ${add(6,6)}`);