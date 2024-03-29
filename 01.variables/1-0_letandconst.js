/*
    let const 전에 var를 썼다.
    하지만 큰 어플리케이션을 만들때 문제가 될 수 있다. 다른 개발자들과 협업할때 등.

    name이라는 var가 있다면 다른 개발자가 쓰는 변수와 코드와 겹쳐서 사용될수도있다.
    var name = 'bibi'; 이런식일때.
    그렇다면 var가 변하는걸 막는 메커니즘이 있어야한다.
    그것이
    const가 나온 이유다.

    ***** const *****

    const 는 변하지 않는 이라는 뜻.
    const 안에 값을 넣은 후에 다시 정의하려고하면
    바꿀수없다는 에러가 나오게 된다.

    const 는 잠겨있거나 우리가 원하는것처럼 read-only는 아니다.
    만약 object라면 그 안의것을 바꿀 수 있다.
    다시 할당은 불가능하다 아예 person을 true라던지 20으로 바꿀수없다.

    이런 object는 막거나수정하지 못하게 하는 방법이 있다.

    ***** let *****
    
    let은 이전의 var 같은 것.
    값을 바꾸어줄 수 있고, 원하는 것 어떤것이든 가능하다.
    기본적으로 const를 사용하는 것이 좋지만
    만약 변수값을 overwrite 해야하는 상황이 일어난다면 
    let을 사용하는것이 좋다.
*/
    const name = 'bibi';
    // name = 'barnes'
    
    const person = {
        name : "bibi"
    }
    person.name = "barnes"
    console.log(person)

    let bibi = "chrome"
    bibi = "heartz"
    console.log(bibi)