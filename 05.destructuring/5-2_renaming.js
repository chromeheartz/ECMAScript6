/*
    ***** renaming *****

    settings 데이터를 api로부터 받았다고 가정해보자.
    api에서 이런 데이터가 들어왔는데 암튼 js가 아닌 요상한 이름으로 된 데이터를 받았다
    이 이름을 바꾸고 싶을때 하는것이 rename이다.

    하지만 이름을 바꾸자고 destructuring구조를 포기하고싶진 않다
    chosen_color 를 chosenColor 이런식으로만 바꾸고싶은것

    const chosenColor = settings.color.chosen_color || "light";

    이런식으로할 수 있지만 보기에 복잡하다

    let { let으로 해주어도 잘된다.
        color : { chosen_color : chosenColor = "light" }
    } = settings;
    이런식으로 기존 구조에서 : 컬럼을 추가하고 내가 바꾸고싶은 이름으로 넣는것이다

    let chosenColor = "blue"

    // 이 부분에서 api를 불러오면 chosenColor를 업데이트 하는 방식을 쓰고싶다

    let {
        color : { chosen_color : chosenColor = "light" }
    } = settings;
    만약 여기서도 let 을 사용하면 동작하지 않을것이다. 
    같은 let 변수를 두번 만들 수 없기때문
    const 를 사용하면 이름만 똑같은것이라서 그것도 안된다.

    그럴때에는 괄호로 감싸주면 된다.
    그렇게되면 새 변수를 생성하는 대신에 let 변수인 chosenColor를 업데이트한것이다.

    이것이 가능한 이유는 우리가 이전에 했던대로
    똑같이 destructuring 해주었지만
    변수 이름을 바꿔주었기 때문(rename)
    
    또 const를 넣지않고 let을 썼기 때문에
    업데이트 한 개념이다
    const 는 overwrite가 불가능하기 때문.
*/
const settings = {
    color : {
        chosen_color : "dark"
    }
};

let chosenColor = "blue"
console.log(chosenColor);
/////////////////

({ 
    color : { chosen_color : chosenColor = "light" }
} = settings);

console.log(chosenColor);