/*
    ***** block scope *****
    
    let 과 const 의 또다른 장점은 
    block scope가 있다는 점이다.

    scope는 기본적으로 버블이다
    이 버블이 변수들이 접근이 가능한지 아닌지를 감시해준다.

    ***** function scope *****
    function scope의 뜻은 var가 function 안에서 
    접근 할 수 있다는 뜻.
*/
    if(true) {
        let hello = "hi";
    }
    // console.log(hello);
    /*
        이것은 작동할것 같아보이지만 작동하지 않는다.
        왜냐하면 이 경우네는 const 그리고 let도 마찬가지로
        모두 block scope로 되어있다.
        그 말은 그 block 안에서만 존재한다는 것이다
        
        block은 이 두가지로 { } 만들어져있다.

        if(true){...}밖에서 hello는 존재하지 않는것이다.
        이게 우리가 값을 가져오지 못하는 이유다.
        정의되어있지 않기 때문

        const가 아닌 var를 쓰면 block scope같은 건 없다
        if while for 구문 안에서 var로 만들 수 있지만,
        그 변수를 계속 사용할 수 있을것이다.
        block scope 를 가지지 않고 function scope를 가지기 때문
    */
    if(true) {
        let hello = "hi";
    }
    let hello = "bye"
    console.log(hello);
    /*
        내가 가지고 있는것이 보호받고 있는것이다.
        이 블록 안에서 어떤 것을 선언하면 외부로 나가지 않는다.

        물론 외부로 꺼내면 안에서 그 값을 가져올 수 있다.

        hello 의 값을 수정하고 싶을때
        블록안에서 hello의 값을 수정하면 된다.

        let hello;
        if (true){
            hello = "lalala"
        }
        console.log(hello);

        hello는 버블 외부에 있기 때문에 잘 실행될것이다.

        이것이 scope다.
        보기 편해졌고 {} 를 볼 때마다 그 안에 버블이 있다는것을 알고
        그 버블 외부에서는 안으로 접근할 수 없다는것을 알게 된것.
        예를들어 버블안에 다른 버블이 있다면 
        if (true) {
            1111111
            if (true) {
                2222222
            }
        }

        2에서는 1로 접근할 수 있지만 1에서는 2로 접근하지 못한다
        외부에서 안으로는 불가.
    */